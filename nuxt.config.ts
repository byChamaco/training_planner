// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['~/assets/css/main.css'],
    modules: ['@nuxt/ui'],
    colorMode: {
        preference: 'light',
    },
    ssr: false,
    routeRules: {
        '/api/users': { swr: false },
    },
//   devtools: { enabled: true },
})