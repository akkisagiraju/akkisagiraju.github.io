import React from 'react';
import { graphql, Link } from 'gatsby';
import { AiOutlineClockCircle, AiOutlineCalendar } from 'react-icons/ai';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import PostFooter from '../components/PostFooter';

const Post = ({ data }) => {
  const blogPost = data.markdownRemark;
  const { previous, next } = data;

  return (
    <Layout>
      <Seo title={blogPost.frontmatter.title} description={blogPost.frontmatter.description || blogPost.excerpt} />
      <div className="mb-8 flex justify-between items-center">
        <Link to="/" className="font-medium text-blue-800 dark:text-blue-500 text-xl">
          Akhil Sagiraju
        </Link>
        <a
          href="mailto:svakhilvarma@gmail.com"
          className="inline-block font-medium bg-blue-800 dark:bg-blue-600 rounded-lg text-white px-4 py-2 text-base shadow"
        >
          Contact
        </a>
      </div>
      <h1 className="text-3xl font-bold dark:text-gray-100 mt-4 mb-4 lg:text-4xl">{blogPost.frontmatter.title}</h1>
      <div className="flex justify-between items-center mt-2 lg:justify-start">
        <p className="flex items-center text-sm text-gray-500 dark:text-gray-400 lg:mr-20 lg:text-base">
          {' '}
          <AiOutlineCalendar style={{ marginRight: 4 }} /> {blogPost.frontmatter.date}
        </p>
        <p className="flex items-center text-sm text-gray-500 dark:text-gray-400 lg:text-base">
          <AiOutlineClockCircle style={{ marginRight: 4 }} />
          {blogPost.timeToRead} min read
        </p>
      </div>
      <div className="my-8" dangerouslySetInnerHTML={{ __html: blogPost.html }}></div>
      <nav className="pt-8 border-t-2 border-gray-200 dark:border-gray-600">
        <PostFooter />
        <ul className="flex flex-wrap justify-between items-center list-none mt-8">
          <li>
            {previous && (
              <Link
                to={previous.fields.slug}
                className="font-medium text-blue-800 dark:text-blue-500 text-xl"
                rel="prev"
              >
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} className="font-medium text-blue-800 dark:text-blue-500 text-xl" rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  );
};

export default Post;

export const pageQuery = graphql`
  query($id: String!, $previousPostId: String, $nextPostId: String) {
    markdownRemark(id: { eq: $id }) {
      html
      excerpt(pruneLength: 160)
      frontmatter {
        title
        date(formatString: "DD MMM YYYY")
      }
      timeToRead
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`;
