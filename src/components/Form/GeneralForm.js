/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import { PostContext } from '~/contexts/PostProvider';
import SelectCategory from '../SelectCategory';

const GeneralForm = () => {
  const { post, setPost } = useContext(PostContext);
  const [input, setInput] = useState(() => {
    const { title, category, price, description, address } = post;
    return { title, category, price, description, address };
  });

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    setPost({ ...post, ...input });
  }, [input]);
  return (
    <div>
      <h2 className='font-medium text-2xl'>Thông tin chung</h2>
      <form className='flex flex-col text-gray-500'>
        <SelectCategory
          currentValue={input.category._id || input.category}
          handleChange={handleChange}
        />
        <input
          name='title'
          value={input.title}
          onChange={handleChange}
          type='text'
          placeholder='Tiêu dề'
          required
          className='w-full capitalize p-2 border border-gray-400 rounded-sm mt-8 focus:border-yellow-300 focus:outline-none'
        />
        <input
          name='price'
          value={input.price}
          onChange={handleChange}
          type='text'
          placeholder='Giá'
          required
          className='w-full p-2 border border-gray-400 rounded-sm mt-8 focus:border-yellow-300 focus:outline-none'
        />
        <textarea
          name='description'
          onChange={handleChange}
          value={input.description}
          required
          className='w-full h-16 min-h-max mt-8 px-2 py-1 rounded-sm focus:border-yellow-300 border border-gray-400 outline-none'
          placeholder='Mô tả'
        ></textarea>
        <textarea
          name='address'
          value={input.address}
          onChange={handleChange}
          required
          className='w-full h-16 min-h-max mt-8 px-2 py-1 rounded-sm focus:border-yellow-300 border border-gray-400 outline-none'
          placeholder='Địa chỉ'
        ></textarea>
      </form>
    </div>
  );
};

export default GeneralForm;
