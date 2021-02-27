import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="w-screen min-h-screen dark:bg-gray-900">
      <div className="mx-auto p-8 lg:p-12 md:w-2/3 2xl:w-1/2">{children}</div>
    </div>
  );
};

export default Layout;
