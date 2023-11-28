import React from 'react';
import { Link } from 'gatsby';

const Bio = () => {
  return (
    <div className="flex flex-col items-center justify-between pb-6 border-b-2 border-gray-500">
      <div className="text-center">
        <h2 className="font-bold text-blue-800 dark:text-blue-500 text-2xl mt-4 mb-2 lg:text-3xl">Akhil Sagiraju</h2>
        <p className="text-gray-800 dark:text-gray-300 text-base mx-auto">
          A web software engineer based in India.
        </p>
        <div className="flex justify-center mt-4">
          <Link to="/" className="mx-2 text-sm text-blue-600 hover:text-blue-800">
            Home
          </Link>
          <a className="mx-2 text-sm text-blue-600 hover:text-blue-800" href="mailto:aksass@protonmail.com">
            E-mail
          </a>
          <a
            className="mx-2 text-sm text-blue-600 hover:text-blue-800"
            href="https://github.com/akkisagiraju"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <Link to="/uses" className="mx-2 text-sm text-blue-600 hover:text-blue-800">
            Uses
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Bio;
