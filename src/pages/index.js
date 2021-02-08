import React from 'react';
import { graphql, Link } from 'gatsby';
import { AiFillClockCircle, AiFillCalendar } from 'react-icons/ai';
import Bio from '../components/Bio';

const Home = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;

  return (
    <div className="mx-auto p-8 lg:w-1/2">
      <Bio />
      <div className="my-12">
        {posts.map((post) => (
          <div key={post.node.id} className="my-8 my-12">
            <Link to={post.node.fields.slug} className="text-xl font-bold lg:text-2xl">
              {post.node.frontmatter.title}
            </Link>
            <div className="flex justify-between items-center mt-2 lg:justify-start">
              <p className="flex items-center text-sm text-gray-500 lg:mr-20 lg:text-base">
                {' '}
                <AiFillCalendar style={{ marginRight: 4 }} /> {post.node.frontmatter.date}
              </p>
              <p className="flex items-center text-sm text-gray-500 lg:text-base">
                <AiFillClockCircle style={{ marginRight: 4 }} />
                {post.node.timeToRead} min read
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
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
