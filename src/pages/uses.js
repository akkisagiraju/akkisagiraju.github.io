import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import Bio from '../components/Bio';

const Uses = ({ data }) => {
  const usesContent = data.markdownRemark;
  return (
    <Layout>
      <Seo title="Uses" />
      <Bio />
      <div className="my-8" dangerouslySetInnerHTML={{ __html: usesContent.html }}></div>
    </Layout>
  );
};

export const query = graphql`
  query {
    markdownRemark(fileAbsolutePath: { regex: "/uses/" }) {
      id
      html
    }
  }
`;

export default Uses;
