module.exports = {
  siteMetadata: {
    title: 'Modern CSS'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-gtag',
      options: {
        trackingId: 'UA-80557105-8',
        anonymize: true
      }
    }
  ]
};
