import React from 'react';

const Bio = () => {

  return (
    <div className="flex flex-col items-center justify-between pb-6 border-b-2 border-gray-500">
      <div className="text-center">
        <h2 className="font-bold text-blue-800 dark:text-blue-500 text-2xl mt-4 mb-2 lg:text-3xl">Akhil Sagiraju</h2>
        <p className="text-gray-800 dark:text-gray-300 text-base mx-auto lg:w-3/5">
          Personal blog by Akhil, a front-end engineer based in India.
        </p>
        <div className="flex justify-center mt-2">
          <a className="mx-2 text-sm underline text-blue-800" href="mailto:aksass@protonmail.com">
            E-mail
          </a>
          <a className="mx-2 text-sm underline text-blue-800" href="https://github.com/akkisagiraju" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
        {/* <a
          href="mailto:svakhilvarma@gmail.com"
          className="inline-block font-medium bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 rounded-lg text-white px-4 py-2 mt-4 text-base shadow"
        >
          Contact
        </a> */}
      </div>
    </div>
  );
};

export default Bio;
