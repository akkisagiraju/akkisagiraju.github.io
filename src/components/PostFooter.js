import React from 'react';

const PostFooter = () => {
  return (
    <div className="flex items-center">
      <p className="text-sm text-gray-800 dark:text-gray-300">
        Written by{' '}
        <a href="mailto:aksass@protonmail.com">
          Akhil
        </a>
        , a front-end engineer based in India.
      </p>
    </div>
  );
};

export default PostFooter;