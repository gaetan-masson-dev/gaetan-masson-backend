export default [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      headers: '*',
      origin: [
        'http://localhost:3000', // Development
        'https://gaetan-masson-frontend.vercel.app/', // Production
        'https://*.vercel.app', // Preview deployments
      ]
    }
  },
];
