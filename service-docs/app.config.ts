export default defineAppConfig({
  docus: {
    title: "Melodiy Financial Integration Service",
    description: "The best place to start your documentation.",
    image:
      "https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png",
    url: "https://github.com/SolomonAIEngineering/backend-financial-service",
    socials: {
      twitter: "nuxt_js",
      github: "nuxt-themes/docus",
      nuxt: {
        label: "Nuxt",
        icon: "simple-icons:nuxtdotjs",
        href: "https://nuxt.com",
      },
    },
    github: {
      dir: ".starters/default/content",
      branch: "main",
      repo: "docus",
      owner: "nuxt-themes",
      edit: true,
    },
    aside: {
      level: 0,
      collapsed: false,
      exclude: [],
    },
    main: {
      padded: true,
      fluid: true,
    },
    header: {
      logo: true,
      showLinkIcon: true,
      exclude: [],
      fluid: true,
      title: "Melodiy Financial Integration Service",
      description:
        "Documentation Site For The Melodiy Financial Integration Service",
    },
  },
});
