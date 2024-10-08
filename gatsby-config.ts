import type { GatsbyConfig } from "gatsby";

const siteUrl = "https://gatsby-starter-cms-landing-page.netlify.app";

const config: GatsbyConfig = {
  siteMetadata: {
    title: "Baletní škola Vandy Skopalové",
    description: "Baletní kurzy pro dospělé v Brně",
    copyright: "",
    contact: "",
    siteUrl,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-robots-txt",
    "gatsby-plugin-scroll-reveal",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: `Baltení kurzy pro dospělé v Brně`,
        short_name: `Brno Balet`,
        start_url: `/`,
        background_color: "#FFFFFF",
        theme_color: "#4B8C91",
        display: "standalone",
        icon: "src/images/baletka-orange.png",
      },
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: "./src/content/",
      },
      __key: "pages",
    },
    // {
    //   resolve: "gatsby-plugin-matomo",
    //   options: {
    //     siteId: "0",
    //     matomoUrl: "https://xy.matomo.cloud",
    //     siteUrl,
    //     disableCookies: true,
    //     enableJSErrorTracking: true,
    //     respectDnt: true,
    //     trackLoad: false,
    //   },
    // },
    // make sure to keep it last in the array
    "gatsby-plugin-netlify",
  ],
};

export default config;
