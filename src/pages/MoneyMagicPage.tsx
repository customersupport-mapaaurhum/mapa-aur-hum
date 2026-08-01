import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const PILOT_URL = "https://mapaaurhum-money-magic-pilot.lovable.app/";
const FEEDBACK_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSczTk_J56dQdXjQFQ2IrFgsLBAfwrU8AKx0XNd6vtOqIOkTxw/viewform";

const problems = [
  {
    title: "Money's gone invisible",
    description: "A tap replaces counting cash — the decision behind it never surfaces.",
  },
  {
    title: "Trade-offs go unspoken",
    description: "Real trade-offs happen weekly. Almost none get said out loud.",
  },
  {
    title: "Kids only hear \"no\"",
    description: "Without the reasoning, a child learns compliance instead of judgment.",
  },
];

const tools = [
  {
    title: "Coin Purse",
    description: "Logs spending as \"need\" or \"want\" — each entry attached to the lesson it comes from.",
  },
  {
    title: "Budget",
    description: "A simple spending plan by category, used-vs-planned at a glance.",
  },
  {
    title: "Reports",
    description: "Weekly and monthly charts — kids start reading their habits like a statement.",
  },
  {
    title: "Rewards",
    description: "Badges, streaks and levels, in one place your child checks in on.",
  },
  {
    title: "Parent Home view",
    description: "Log the whole family's expenses together — your child's progress and your household budget, side by side.",
  },
  {
    title: "Daily talking point",
    description: "A daily learning nugget, delivered as a fun game, tied to something already happening at home.",
  },
];

const worlds = [
  "Coin Kingdom",
  "Wishing Well Woods",
  "Budget Bazaar",
  "Wealth Watchtower",
  "Digital Wizard Tower",
];

const pilotPerks = [
  "6 months free when the full app launches",
  "Your feedback directly shapes what gets built next",
  "First access to new features, before anyone else",
];

const MoneyMagicPage = () => {
  return (
    <div
      className="min-h-screen"
      style={{
        background: "#161826",
        color: "#e9e9ed",
        fontFamily: "'Inter', system-ui, sans-serif",
      }}
    >
      <Helmet>
        <title>Money Magic — Teach your child real money management, together</title>
        <meta
          name="description"
          content="Money Magic gives your family a shared language for the everyday decisions behind cash, UPI and every 'can I have this?' Try the pilot."
        />
        <link rel="canonical" href="https://mapa-aur-hum.lovable.app/money-magic" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      {/* Nav */}
      <div className="max-w-[1180px] mx-auto px-5 sm:px-10">
        <nav className="flex items-center gap-4 sm:gap-8 py-6">
          <Link
            to="/"
            className="text-[19px] font-medium mr-auto"
            style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
          >
            Money Magic
          </Link>
          <a href="#problem" className="hidden sm:inline text-sm text-[#e9e9ed]/80 no-underline hover:text-[#a7a1db]">
            The problem
          </a>
          <a href="#approach" className="hidden sm:inline text-sm text-[#e9e9ed]/80 no-underline hover:text-[#a7a1db]">
            Our approach
          </a>
          <a href="#inside" className="hidden sm:inline text-sm text-[#e9e9ed]/80 no-underline hover:text-[#a7a1db]">
            Inside the app
          </a>
          <a
            href="#pilot"
            className="inline-flex items-center text-sm font-medium rounded-lg px-4 py-2 no-underline border"
            style={{ color: "#9184d9", borderColor: "#9184d9" }}
          >
            Try the pilot
          </a>
        </nav>
      </div>

      {/* Hero */}
      <div className="max-w-[1180px] mx-auto px-5 sm:px-10 py-12 sm:py-16 pb-16 sm:pb-24 relative overflow-hidden">
        <div className="max-w-[660px] relative z-10">
          <div className="text-[11px] tracking-[0.1em] uppercase mb-4" style={{ color: "#9184d9" }}>
            Why Money Magic exists
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-[56px] leading-[1.08] mb-6 font-medium tracking-tight">
            Real money management, learned side by side.
          </h1>
          <p className="text-lg sm:text-[19px] opacity-80 max-w-[560px] mb-9">
            Not another worksheet. Every spend your child logs ties back to a lesson, delivered as a daily nugget
            through a fun game — while you talk it through, together.
          </p>
          <div className="flex flex-wrap gap-3.5">
            <a
              href={PILOT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center font-medium text-[15px] rounded-lg px-6 py-3.5 no-underline border"
              style={{ color: "#9184d9", borderColor: "#9184d9" }}
            >
              Try the prototype
            </a>
            <a
              href="#approach"
              className="inline-flex items-center font-medium text-[15px] rounded-lg px-6 py-3.5 no-underline border"
              style={{ color: "#e9e9ed", borderColor: "color-mix(in srgb, #e9e9ed 16%, transparent)" }}
            >
              See the approach
            </a>
          </div>
        </div>
        <div
          className="hidden md:block absolute right-10 top-10 text-[220px] leading-none select-none"
          style={{ color: "#2b2741", opacity: 0.9 }}
          aria-hidden="true"
        >
          ₹
        </div>
      </div>

      {/* Problem */}
      <div id="problem" className="max-w-[1180px] mx-auto px-5 sm:px-10 py-12 sm:py-14 scroll-mt-20">
        <div className="text-[11px] tracking-[0.1em] uppercase mb-3.5" style={{ color: "#9184d9" }}>
          01 — The problem
        </div>
        <h2 className="text-2xl sm:text-[32px] max-w-[620px] mb-4 font-medium tracking-tight">
          Kids learn money by watching. That's gotten quieter.
        </h2>
        <p className="text-base opacity-75 max-w-[600px] mb-10">
          Cash used to teach out loud — counting change, hearing a trade-off said aloud. A tap doesn't.
        </p>
        <div className="grid gap-4 sm:grid-cols-3">
          {problems.map((item) => (
            <div key={item.title} className="rounded-lg p-6" style={{ background: "#232532" }}>
              <div className="text-[17px] font-medium mb-2 tracking-tight">{item.title}</div>
              <p className="text-sm opacity-75 m-0">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Approach */}
      <div id="approach" className="max-w-[1180px] mx-auto px-5 sm:px-10 py-12 sm:py-14 scroll-mt-20">
        <div className="text-[11px] tracking-[0.1em] uppercase mb-3.5" style={{ color: "#9184d9" }}>
          02 — Our approach
        </div>
        <h2 className="text-2xl sm:text-[32px] max-w-[620px] mb-4 font-medium tracking-tight">
          One shared language for money decisions.
        </h2>
        <p className="text-base opacity-75 max-w-[600px] mb-5">
          The whole family manages expenses together, in one place — while your child learns a new money concept
          each day. Money Magic gives your family a shared vocabulary for cash, UPI, and every "can I have this?"
          You stay the teacher. We hand you both the words.
        </p>
        <div className="flex flex-wrap gap-2.5">
          {["Physical cash", "Digital payments", "Everyday asks"].map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center text-xs rounded-md px-3.5 py-1.5 border"
              style={{ borderColor: "#9184d9", color: "#9184d9" }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Quote */}
      <div className="py-16 my-4" style={{ background: "#262a60" }}>
        <div className="max-w-[1180px] mx-auto px-5 sm:px-10">
          <blockquote className="m-0 max-w-[720px]">
            <div
              className="text-2xl sm:text-[28px] font-medium leading-[1.3] mb-3.5 tracking-tight"
              style={{ color: "#f3f5fe" }}
            >
              "200 real trade-offs by age 12 build sharper instincts than 20 memorized definitions."
            </div>
            <div className="text-[15px]" style={{ color: "#d2cefd" }}>
              Not more curriculum. Just the conversation you're already half-having.
            </div>
          </blockquote>
        </div>
      </div>

      {/* Inside the app */}
      <div id="inside" className="max-w-[1180px] mx-auto px-5 sm:px-10 py-12 sm:py-14 scroll-mt-20">
        <div className="text-[11px] tracking-[0.1em] uppercase mb-3.5" style={{ color: "#9184d9" }}>
          03 — What's inside
        </div>
        <h2 className="text-2xl sm:text-[32px] max-w-[660px] mb-4 font-medium tracking-tight">
          Six everyday tools, and 40 mini-courses to grow into.
        </h2>
        <p className="text-base opacity-75 max-w-[600px] mb-9">
          Here's exactly what your child explores, and how you stay in the loop.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-12">
          {tools.map((tool) => (
            <div key={tool.title} className="rounded-lg p-5" style={{ background: "#232532" }}>
              <div className="text-base font-medium mb-1.5 tracking-tight">{tool.title}</div>
              <p className="text-[13px] opacity-75 m-0">{tool.description}</p>
            </div>
          ))}
        </div>

        <div className="pt-9" style={{ borderTop: "1px solid color-mix(in srgb, #e9e9ed 16%, transparent)" }}>
          <h3 className="text-xl sm:text-[22px] mb-2.5 font-medium tracking-tight">The Learn module</h3>
          <p className="text-sm sm:text-[15px] opacity-75 max-w-[600px] mb-5">
            40 mini-courses and counting — story-driven, game-based, split across five deep-dive worlds. Every
            real spend your child logs surfaces a matching lesson, so learning arrives in daily nuggets, not a
            syllabus.
          </p>
          <div className="flex flex-wrap gap-2.5">
            {worlds.map((world) => (
              <span
                key={world}
                className="text-xs rounded-md px-3.5 py-1.5"
                style={{ background: "#423a6a", color: "#f5f4ff" }}
              >
                {world}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Pilot */}
      <div id="pilot" className="max-w-[1180px] mx-auto px-5 sm:px-10 pt-12 sm:pt-16 pb-10 scroll-mt-20">
        <div className="text-[11px] tracking-[0.1em] uppercase mb-3.5" style={{ color: "#9184d9" }}>
          04 — Try the pilot
        </div>
        <h2 className="text-2xl sm:text-[32px] max-w-[640px] mb-4 font-medium tracking-tight">
          Try it with your child, then tell us what you think.
        </h2>
        <p className="text-base opacity-75 max-w-[580px] mb-7">
          An early build — about 10 minutes to explore together, plus two to share feedback. Nothing real,
          nothing stored.
        </p>
        <ul className="list-none m-0 mb-9 p-0 flex flex-col gap-2.5 max-w-[520px]">
          {pilotPerks.map((perk) => (
            <li key={perk} className="text-sm opacity-85 pl-[18px] relative">
              <span className="absolute left-0" style={{ color: "#9184d9" }}>
                —
              </span>
              {perk}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-3.5">
          <a
            href={PILOT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center font-medium text-[15px] rounded-lg px-7 py-3.5 no-underline border"
            style={{ color: "#9184d9", borderColor: "#9184d9" }}
          >
            Open the prototype
          </a>
          <a
            href={FEEDBACK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center font-medium text-[15px] rounded-lg px-7 py-3.5 no-underline border"
            style={{ color: "#e9e9ed", borderColor: "color-mix(in srgb, #e9e9ed 16%, transparent)" }}
          >
            Give feedback
          </a>
        </div>
      </div>

      {/* Footer */}
      <div
        className="max-w-[1180px] mx-auto px-5 sm:px-10 pt-10 pb-14"
        style={{ borderTop: "1px solid color-mix(in srgb, #e9e9ed 16%, transparent)" }}
      >
        <p className="text-base max-w-[520px] opacity-85 mb-3">
          Real money management isn't read. It's practiced — by you and your child, together.
        </p>
        <div className="font-medium text-sm opacity-60">Money Magic</div>
        <Link to="/" className="inline-block mt-4 text-sm underline" style={{ color: "#a7a1db" }}>
          ← Back to Mapa-Aur-Hum
        </Link>
      </div>
    </div>
  );
};

export default MoneyMagicPage;
