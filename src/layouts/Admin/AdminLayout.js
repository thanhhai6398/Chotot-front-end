import React from 'react';
import Sidebar from './common/Sidebar';
import Header from './common/Header';

const AdminLayout = ({ children }) => {
  return (
    <div className='flex mx-auto max-w-5xl bg-gray-100 min-h-screen'>
      <Sidebar />
      <div className='ml-2 bg-white py-8 px-4 flex-1'>
        <Header/>
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;
