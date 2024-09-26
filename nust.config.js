export default {
    // Target (static site or server-side rendered)
    target: 'server', // or 'static' for generating static sites
  
    // Global page headers (HTML <head> section)
    head: {
      title: 'My Portfolio',  // Default title of the website
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'My personal portfolio site' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    },
  
    // Global CSS (stylesheets that apply across the app)
    css: [
      '@/assets/css/main.css' // Example of including global CSS file
    ],
  
    // Plugins to run before rendering page
    plugins: [
      // Example: '~/plugins/my-plugin.js'
    ],
  
    // Auto import components (Nuxt will auto-import components)
    components: true,
  
    // Modules for dev and build (recommended)
    buildModules: [
      '@nuxtjs/eslint-module'  // Example: Adding a build-time module for ESLint
    ],
  
    // Nuxt.js modules (external libraries)
    modules: [
      '@nuxtjs/axios',  // Example: Adds axios module for making HTTP requests
    ],
  
    // Axios module configuration
    axios: {
      baseURL: 'https://api.example.com'  // Example API base URL
    },
  
    // Build Configuration (Webpack-related)
    build: {
      // Example: You can add Webpack loaders here
    },
  
    // Generate Configuration (for static sites)
    generate: {
      // Example: Configure static site generation
    }
  }
  
