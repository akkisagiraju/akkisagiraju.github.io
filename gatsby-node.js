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
    {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: ASC }, limit: 1000) {
        nodes {
          id
          fields {
            slug
          }
        }
      }
    }
  `);

  if (blogs.errors) {
    reporter.panicOnBuild(`There was an error loading your blog posts`, blogs.errors);
    return;
  }

  const blogPosts = blogs.data.allMarkdownRemark.nodes;

  if (blogPosts.length > 0) {
    blogPosts.forEach((blogPost, index) => {
      const previousPostId = index === 0 ? null : blogPosts[index - 1].id;
      const nextPostId = index === blogPosts.length - 1 ? null : blogPosts[index + 1].id;

      createPage({
        path: blogPost.fields.slug,
        component: path.resolve('./src/templates/post.js'),
        context: {
          id: blogPost.id,
          previousPostId,
          nextPostId
        }
      });
    });
  }
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
    type SiteSiteMetadata {
      title: String
      description: String
      siteUrl: String
    }
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }
    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
    }
    type Fields {
      slug: String
    }
  `);
};
