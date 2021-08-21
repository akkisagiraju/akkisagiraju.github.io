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
                'heading[depth=1]': 'text-3xl font-bold mt-2 mb-4 lg:text-4xl dark:text-gray-100',
                'heading[depth=2]': 'text-2xl font-bold mt-2 mb-4 lg:text-3xl dark:text-gray-100',
                'heading[depth=3]': 'text-xl font-bold mt-2 mb-4 lg:text-2xl dark:text-gray-100',
                'heading[depth=4]': 'text-lg font-bold mt-2 mb-4 lg:text-xl dark:text-gray-100',
                'heading[depth=5]': 'text-md font-bold mt-2 mb-4 lg:text-lg dark:text-gray-100',
                paragraph: 'text-md mt-2 mb-8 lg:text-lg dark:text-gray-200'
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
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://akhilsagiraju.com',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    'gatsby-plugin-postcss',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap'
  ]
};
