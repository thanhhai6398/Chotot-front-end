import React, { useEffect, useState } from 'react';
import { httpGetAllCategories } from '~/apiServices/categoryServices';
const allImg =
  'https://lighthouse.chotot.com/_next/image?url=https%3A%2F%2Fstatic.chotot.com%2Fstorage%2Fchapy-pro%2Fnewcats%2Fv8%2F9000.png&w=256&q=95';
const ListCategories = ({ setCategory }) => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const getAllCategories = async () => {
      const res = await httpGetAllCategories();
      setCategories(res.data);
    };
    getAllCategories();
  }, []);
  return (
    <ul
      className='mx-auto py-8 rounded-2xl mb-4 bg-white
    flex items-center'
    >
      <li
        key={0}
        onClick={() => setCategory({ _id: 0, name: 'Tất cả' })}
        className='text-center w-1/10 mx-6 cursor-pointer'
      >
        <img src={allImg} alt='Tất cả' className='object-contain' />
        <p className='text-md my-1 w-full'>Tất cả</p>
      </li>
      {categories?.length > 0 &&
        categories.map((cate, index) => (
          <li
            key={cate._id}
            onClick={() => setCategory({ _id: cate._id, name: cate.name })}
            className='text-center w-1/8 mx-6 cursor-pointer'
          >
            <img src={cate.image} alt={cate.name} className='object-contain' />
            <p className='text-md my-1 w-full'>{cate.name}</p>
          </li>
        ))}
    </ul>
  );
};

export default ListCategories;
