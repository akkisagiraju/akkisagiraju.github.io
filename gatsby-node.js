const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, getNode, actions }) => {
  if (node.internal.type === 'MarkdownRemark') {
    const { createNodeField } = actions;
    const slug = createFilePath({ node, getNode });
    createNodeField({
      node,
      name: 'slug',
      value: slug
    });
  }
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const blogs = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            id
          }
        }
      }
    }
  `);

  if (blogs.errors) {
    reporter.panicOnBuild(`There was an error loading your blog posts`, blogs.errors);
    return;
  }

  const blogPosts = blogs.data.allMarkdownRemark.edges;

  if (blogPosts.length > 0) {
    blogPosts.forEach(({ node }, index) => {
      const previousPostId = index === 0 ? null : blogPosts[index - 1].node.id;
      const nextPostId = index === blogPosts.length - 1 ? null : blogPosts[index + 1].node.id;

      createPage({
        path: node.fields.slug,
        component: path.resolve('./src/templates/post.js'),
        context: {
          slug: node.fields.slug,
          previousPostId,
          nextPostId
        }
      });
    });
  }
};
