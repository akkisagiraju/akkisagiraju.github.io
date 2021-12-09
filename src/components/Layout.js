import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen dark:bg-gray-900">
      <div className="mx-auto p-8 md:w-2/3 2xl:w-1/3">{children}</div>
    </div>
  );
};

export default Layout;
