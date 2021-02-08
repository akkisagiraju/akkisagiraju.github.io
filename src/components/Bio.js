import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

const Bio = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "akhil.jpg" }) {
        childImageSharp {
          fixed(width: 500, height: 500) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  const image = data.file.childImageSharp.fixed;

  return (
    <div className="flex flex-col items-center justify-between pb-6 border-b-2 border-gray-500 lg:pb-6">
      <div className="w-32 h-32 bg-gray-500 rounded-full mx-auto lg:w-40 lg:h-40">
        <Image style={{ width: '100%', height: '100%', borderRadius: '100%' }} fixed={image} />
      </div>
      <div className="text-center">
        <h2 className="font-bold text-blue-800 text-2xl mt-4 mb-2 lg:text-3xl">Akhil Sagiraju</h2>
        <p className="text-gray-800 text-base mx-auto lg:w-3/5 lg:text-lg">
          Personal blog by Akhil, a front-end developer and a tech enthusiast based in India.
        </p>
        <a
          href="mailto:svakhilvarma@gmail.com"
          className="inline-block font-medium bg-blue-800 rounded-lg text-white px-6 py-2 mt-4 text-base shadow lg:text-lg"
        >
          Contact
        </a>
      </div>
    </div>
  );
};

export default Bio;
