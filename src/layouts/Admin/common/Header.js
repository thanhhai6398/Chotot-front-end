import React from 'react';
import { BiBell, BiCategoryAlt, BiUserCheck } from 'react-icons/bi';

const Header = () => {
  return (
    <div className='grid grid-cols-3 gap-x-4 p-4'>
      <div className='w-full h-20 p-2 rounded-md shadow-lg bg-red-600 text-white'>
        <p className='text-md'>Tin mới</p>
        <h2 className='flex items-center justify-between text-4xl'>
          50
          <span className='text-3xl mr-2'>
            <BiBell />
          </span>
        </h2>
      </div>
      <div className='w-full h-20 p-2 rounded-md shadow-lg bg-green-600 text-white'>
        <p className='text-md'>Danh mục</p>
        <h2 className='flex items-center justify-between text-4xl'>
          50
          <span className='text-3xl mr-2'>
            <BiCategoryAlt />
          </span>
        </h2>
      </div>
      <div className='w-full h-20 p-2 rounded-md shadow-lg bg-blue-600 text-white'>
        <p className='text-md'>Người dùng</p>
        <h2 className='flex items-center justify-between text-4xl'>
          50
          <span className='text-3xl mr-2'>
            <BiUserCheck />
          </span>
        </h2>
      </div>
    </div>
  );
};

export default Header;
