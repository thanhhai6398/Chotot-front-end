import React, { useEffect, useState } from 'react';

const ListCategories = ({ categories }) => {
  const [category, setCategory] = useState();
  useEffect(() => {
    const getPostsByCategoryId = async () => {
      //setPOsts()
    };
    getPostsByCategoryId();
  }, [category]);
  return (
    <div
      className='mx-auto py-8 rounded-2xl mb-4 bg-white
    flex items-center'
    >
      {categories.map((cate) => (
        <div
          onClick={() => setCategory(cate.id)}
          className='text-center w-1/8 mx-6 cursor-pointer'
        >
          <img src={cate.image} alt={cate.name} className='object-contain' />
          <p className='text-md my-1 w-full'>{cate.name}</p>
        </div>
      ))}
    </div>
  );
};

export default ListCategories;