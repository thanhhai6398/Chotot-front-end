import React from 'react';
import { Link } from 'react-router-dom';
import { BiCategory, BiNews, BiUser } from 'react-icons/bi';
import { SlUser } from 'react-icons/sl';

const Sidebar = () => {
  const NAV_LINKS = [
    {
      text: 'Quản lý danh mục',
      icon: <BiCategory />,
      path: '/categories',
    },
    {
      text: 'Quản lý tin',
      icon: <BiNews />,
      path: '/posts',
    },
    {
      text: 'Người dùng',
      icon: <BiUser />,
      path: '/users',
    },
  ];
  const handleNavLinks = () => {
    return NAV_LINKS.map((link, index) => {
      return (
        <li key={index} className='block py-2 px-4 mb-4'>
          <Link className='flex items-center text-lg hover:text-primary' to={link.path}>
            <span className='text-3xl mr-4'>{link.icon}</span>
            {link.text}
          </Link>
        </li>
      );
    });
  };
  return (
    <aside className='w-1/4 h-screen overflow-y-scrol bg-white shadow-2xl flex flex-col items-center'>
      <div className='h-24 w-24 rounded-full bg-primary flex items-center justify-center my-5'>
        <h1 className='text-center m-auto text-4xl text-white'>
          <SlUser />
        </h1>
      </div>
      <ul className='w-full mt-4'>{handleNavLinks()}</ul>
    </aside>
  );
};
export default Sidebar;
