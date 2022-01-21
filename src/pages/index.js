import React from 'react';
import { graphql, Link } from 'gatsby';
import { AiOutlineClockCircle, AiOutlineCalendar } from 'react-icons/ai';
import Bio from '../components/Bio';
import Layout from '../components/Layout';
import Seo from '../components/Seo';

const Home = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes;

  if (!posts.length) {
    return (
      <Layout>
        <Seo title="Akhil Sagiraju" />
        <Bio />
        <div className="my-8">
          <p className="text-lg text-center text-gray-500 dark:text-gray-400">No blog posts found</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Seo title="Akhil Sagiraju" />
      <Bio />
      <div className="my-8">
        {posts.map((post) => (
          <div key={post.id} className="my-8">
            <Link to={post.fields.slug} className="text-xl text-gray-900 dark:text-gray-100 font-bold lg:text-2xl">
              {post.frontmatter.title}
            </Link>
            <div className="flex justify-between items-center mt-2 lg:justify-start">
              <p className="flex items-center text-sm text-gray-500 dark:text-gray-400 lg:mr-20 lg:text-base">
                {' '}
                <AiOutlineCalendar style={{ marginRight: 4 }} /> {post.frontmatter.date}
              </p>
              <p className="flex items-center text-sm text-gray-500 dark:text-gray-400 lg:text-base">
                <AiOutlineClockCircle style={{ marginRight: 4 }} />
                {post.timeToRead} min read
              </p>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(filter: {fields: {slug: {regex: "/blogs/"}}}, sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        id
        fields {
          slug
        }
        frontmatter {
          date(formatString: "DD MMM YYYY")
          title
        }
        timeToRead
      }
      totalCount
    }
  }
`;

export default Home;
