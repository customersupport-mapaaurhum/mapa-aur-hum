import { createClient } from 'npm:@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

const isEmail = (s: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  if (req.method !== 'POST' && req.method !== 'GET') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }

  try {
    let customer_email = '';
    let question_1: string | null = null;
    let question_2: string | null = null;
    let response_date: string | undefined;
    let redirect_url: string | null = null;

    if (req.method === 'GET') {
      const url = new URL(req.url);
      const p = url.searchParams;
      customer_email = (p.get('customer_email') || p.get('email') || '').trim();
      question_1 = (p.get('question_1') || p.get('q1') || '').trim().slice(0, 2000) || null;
      question_2 = (p.get('question_2') || p.get('q2') || '').trim().slice(0, 2000) || null;
      response_date = p.get('response_date') || undefined;
      redirect_url = p.get('redirect') || p.get('redirect_url');
    } else {
      const body = await req.json().catch(() => null);
      if (!body || typeof body !== 'object') {
        return new Response(JSON.stringify({ error: 'Invalid JSON body' }), {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
      customer_email = typeof body.customer_email === 'string' ? body.customer_email.trim() : '';
      question_1 = typeof body.question_1 === 'string' ? body.question_1.trim().slice(0, 2000) : null;
      question_2 = typeof body.question_2 === 'string' ? body.question_2.trim().slice(0, 2000) : null;
      response_date = typeof body.response_date === 'string' ? body.response_date : undefined;
    }

    if (!customer_email || customer_email.length > 255 || !isEmail(customer_email)) {
      return new Response(JSON.stringify({ error: 'Valid customer_email is required' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const supabase = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    );

    const insert: Record<string, unknown> = { customer_email, question_1, question_2 };
    if (response_date) insert.response_date = response_date;

    const { data, error } = await supabase
      .from('poll_responses')
      .insert(insert)
      .select()
      .single();

    if (error) {
      console.error('Insert error:', error);
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ success: true, data }), {
      status: 201,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (e) {
    console.error('Unhandled error:', e);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
