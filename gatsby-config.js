module.exports = {
  siteMetadata: {
    title: `Ankit Maurya`,
    siteUrl: `https://maurya-ankit.github.io`,
    description: `Ankit Maurya's personal website.`,
    author: `Ankit Maurya`,
    keywords: [`ankit maurya`, `portfolio`],
    'google-site-verification': `MysWIXF-YqnH7cUNS1vp5z5Jxot0Ho0CS7NMFhg7s3Q`
  },
  plugins: [
    'gatsby-plugin-postcss',
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        // Defaults used for gatsbyImageData and StaticImage
        defaults: {},
        // Set to false to allow builds to continue on image errors
        failOnError: true,
        // deprecated options and their defaults:
        base64Width: 20,
        forceBase64Format: `webp`, // valid formats: png,jpg,webp
        useMozJpeg: process.env.GATSBY_JPEG_ENCODER === `MOZJPEG`,
        stripMetadata: true,
        defaultQuality: 50,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ankit Maurya`,
        short_name: `Ankit Maurya`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
  ]
}