import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen dark:bg-gray-900">
      <div className="mx-auto py-8 px-5 md:w-2/3 lg:w-1/2">{children}</div>
    </div>
  );
};

export default Layout;
