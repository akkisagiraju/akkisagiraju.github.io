import React from 'react';
import { graphql } from 'gatsby';

const Post = ({ data }) => {
  const blogPost = data.markdownRemark;

  return <div dangerouslySetInnerHTML={{ __html: blogPost.html }}></div>;
};

export default Post;

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
