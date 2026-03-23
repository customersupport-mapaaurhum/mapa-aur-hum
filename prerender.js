import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'

if (typeof globalThis.localStorage === 'undefined') {
  globalThis.localStorage = {
    getItem: () => null,
    setItem: () => {},
    removeItem: () => {},
    clear: () => {},
    length: 0,
    key: () => null,
  }
}

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

// Read the built template
const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8')
const { render } = await import('./dist/server/entry-server.js')

// Explicit routes matching App.tsx - excludes admin/auth pages and dynamic routes
const routesToPrerender = [
  '/',
  '/faq',
  '/tutorials',
  '/champions',
  '/download',
  '/why-mapa',
  '/key-features',
  '/articles',
  '/pricing',
  '/founder',
  '/contributors',
  '/contact',
  '/caregiver-game',
  '/jobs',
]

// SEO metadata for each route
const routeMeta = {
  '/': {
    title: 'MaPa Aur Hum - Smart Parenting & Caregiver Management App',
    description: 'Empower your parenting journey with MaPa Aur Hum. Track caregiver activities, manage routines, and ensure your child\'s wellbeing with our comprehensive app.',
  },
  '/faq': {
    title: 'FAQ - MaPa Aur Hum',
    description: 'Find answers to frequently asked questions about MaPa Aur Hum app features, pricing, and usage.',
  },
  '/tutorials': {
    title: 'Tutorials - MaPa Aur Hum',
    description: 'Learn how to use MaPa Aur Hum with our step-by-step tutorials and guides.',
  },
  '/champions': {
    title: 'Champions - MaPa Aur Hum',
    description: 'Meet our MaPa Aur Hum Champions who are making a difference in parenting.',
  },
  '/download': {
    title: 'Download - MaPa Aur Hum',
    description: 'Download MaPa Aur Hum app for Android and iOS. Start your smart parenting journey today.',
  },
  '/why-mapa': {
    title: 'Why MaPa - MaPa Aur Hum',
    description: 'Discover why MaPa Aur Hum is the best choice for managing caregivers and ensuring your child\'s wellbeing.',
  },
  '/key-features': {
    title: 'Key Features - MaPa Aur Hum',
    description: 'Explore the powerful features of MaPa Aur Hum including activity tracking, health monitoring, and caregiver management.',
  },
  '/articles': {
    title: 'Founder Articles - MaPa Aur Hum',
    description: 'Read insightful articles from our founder about parenting, childcare, and caregiver management.',
  },
  '/pricing': {
    title: 'Pricing - MaPa Aur Hum',
    description: 'View MaPa Aur Hum pricing plans. Choose the plan that best fits your family\'s needs.',
  },
  '/founder': {
    title: 'Founder - MaPa Aur Hum',
    description: 'Meet the founder of MaPa Aur Hum and learn about the vision behind the app.',
  },
  '/contributors': {
    title: 'Contributors - MaPa Aur Hum',
    description: 'Meet the team and contributors who helped build MaPa Aur Hum.',
  },
  '/contact': {
    title: 'Contact Us - MaPa Aur Hum',
    description: 'Get in touch with the MaPa Aur Hum team. We\'re here to help with your questions and feedback.',
  },
  '/caregiver-game': {
    title: 'Caregiver Training Game - MaPa Aur Hum',
    description: 'Test your knowledge with our interactive caregiver training game.',
  },
  '/jobs': {
    title: 'Careers - MaPa Aur Hum',
    description: 'Join our team at MaPa Aur Hum. View current job openings and career opportunities.',
  },
}

const BASE_URL = 'https://www.mapaaurhum.com'

console.log('Starting pre-rendering...')
console.log(`Routes to pre-render: ${routesToPrerender.length}`)

;(async () => {
  for (const routeUrl of routesToPrerender) {
    try {
      const appHtml = render(routeUrl)
      const meta = routeMeta[routeUrl] || routeMeta['/']
      const canonicalUrl = `${BASE_URL}${routeUrl === '/' ? '' : routeUrl}`
      
      // Inject pre-rendered content and update meta tags
      let html = template
        .replace(`<!--app-html-->`, appHtml)
        // Update canonical URL for each page
        .replace(
          /<link rel="canonical" href="[^"]*">/,
          `<link rel="canonical" href="${canonicalUrl}">`
        )
        // Update title if present in template
        .replace(
          /<title>[^<]*<\/title>/,
          `<title>${meta.title}</title>`
        )
        // Update meta description
        .replace(
          /<meta name="description" content="[^"]*">/,
          `<meta name="description" content="${meta.description}">`
        )
        // Update OG title
        .replace(
          /<meta property="og:title" content="[^"]*">/,
          `<meta property="og:title" content="${meta.title}">`
        )
        // Update OG description
        .replace(
          /<meta property="og:description" content="[^"]*">/,
          `<meta property="og:description" content="${meta.description}">`
        )
        // Update OG URL
        .replace(
          /<meta property="og:url" content="[^"]*">/,
          `<meta property="og:url" content="${canonicalUrl}">`
        )
        // Update Twitter title
        .replace(
          /<meta name="twitter:title" content="[^"]*">/,
          `<meta name="twitter:title" content="${meta.title}">`
        )
        // Update Twitter description
        .replace(
          /<meta name="twitter:description" content="[^"]*">/,
          `<meta name="twitter:description" content="${meta.description}">`
        )

      // Determine output file path
      const filePath = routeUrl === '/' 
        ? 'dist/index.html' 
        : `dist${routeUrl}.html`
      
      // Ensure directory exists for nested routes
      const dir = path.dirname(toAbsolute(filePath))
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true })
      }
      
      fs.writeFileSync(toAbsolute(filePath), html)
      console.log('✓ pre-rendered:', filePath)
    } catch (error) {
      console.error(`✗ Error pre-rendering ${routeUrl}:`, error.message)
    }
  }
  
  console.log('\nPre-rendering complete!')
})()
