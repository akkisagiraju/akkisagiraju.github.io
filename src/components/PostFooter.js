import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

const PostFooter = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "akhil.jpg" }) {
        childImageSharp {
          fixed(width: 200, height: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  const image = data.file.childImageSharp.fixed;
  return (
    <div className="flex items-center">
      <div className="w-16 h-16 rounded-full mr-4 lg:w-20 lg:h-20">
        <Image style={{ width: '100%', height: '100%', borderRadius: '100%' }} fixed={image} />
      </div>
      <p className="text-gray-800 dark:text-gray-300">
        Written by Akhil, a frontend developer and a tech enthusiast based in India.
      </p>
    </div>
  );
};

export default PostFooter;
