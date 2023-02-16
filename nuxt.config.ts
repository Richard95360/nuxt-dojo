// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    css: [
        '@/assets/css/tailwind.css',
      ],
      app:{
        head:{
            title: 'Nuxt-Dojo',
            meta: [
                {name : 'description', content: 'Everything about Nuxt 3'}
            ],
            link: [
                {rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'}
            ]
        }
      }
  })