import React from 'react';
import { graphql, Link } from 'gatsby';
import { AiOutlineClockCircle, AiOutlineCalendar } from 'react-icons/ai';
import Bio from '../components/Bio';
import Layout from '../components/Layout';

const Home = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <Bio />
      <div className="my-12">
        {posts.map((post) => (
          <div key={post.node.id} className="my-8 my-12">
            <Link to={post.node.fields.slug} className="text-xl text-gray-900 dark:text-gray-100 font-bold lg:text-2xl">
              {post.node.frontmatter.title}
            </Link>
            <div className="flex justify-between items-center mt-2 lg:justify-start">
              <p className="flex items-center text-sm text-gray-500 dark:text-gray-400 lg:mr-20 lg:text-base">
                {' '}
                <AiOutlineCalendar style={{ marginRight: 4 }} /> {post.node.frontmatter.date}
              </p>
              <p className="flex items-center text-sm text-gray-500 dark:text-gray-400 lg:text-base">
                <AiOutlineClockCircle style={{ marginRight: 4 }} />
                {post.node.timeToRead} min read
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
    allMarkdownRemark {
      edges {
        node {
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
      }
      totalCount
    }
  }
`;

export default Home;
