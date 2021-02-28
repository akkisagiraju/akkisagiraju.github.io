module.exports = {
  pathPrefix: '/',
  siteMetadata: {
    title: 'Akhil Sagiraju',
    description: 'Personal blog by Akhil, a front-end developer and a tech enthusiast based in India.',
    siteUrl: 'https://akhilsagiraju.com'
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/content`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-classes`,
            options: {
              classMap: {
                'heading[depth=1]': 'text-3xl font-bold my-6 lg:text-4xl dark:text-gray-100',
                'heading[depth=2]': 'text-2xl font-bold my-6 lg:text-3xl dark:text-gray-100',
                'heading[depth=3]': 'text-xl font-bold my-6 lg:text-2xl dark:text-gray-100',
                paragraph: 'text-md text-black my-6 lg:text-lg dark:text-gray-200'
              }
            }
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 600
            }
          },
          'gatsby-remark-prismjs'
        ]
      }
    },
    'gatsby-plugin-postcss',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet'
  ]
};
