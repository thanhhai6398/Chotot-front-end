/* eslint-disable react-hooks/exhaustive-deps */
import React, { useMemo, useState } from 'react';
import SelectCategory from '../SelectCategory';

const ViewPost = ({ post, setPost, handleSubmit}) => {
  const [images, setImages] = useState([]);
  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };
  const handleAddNewImage = (e) => {
    for (let i = 0; i < e.target.files.length; i++) {
      const newImage = e.target.files[i];
      setImages((prevState) => [...prevState, newImage]);
    }
  };
  useMemo(() => {
    if (images.length > 0) {
      setPost({ ...post, newImages: images });
    }
  }, [images]);
  return (
    <section className='max-w-screen-lg min-h-screen mx-auto bg-white p-8 flex flex-col text-center'>
      <label className='text-left font-medium text-xl'>Thông tin chung</label>
      <form className='flex flex-col text-gray-500'>
        <SelectCategory
          currentValue={post.category._id || post.category}
          handleChange={handleChange}
        />
        <input
          name='title'
          value={post.title}
          onChange={handleChange}
          type='text'
          placeholder='Tiêu dề'
          required
          className='w-full capitalize p-2 border border-gray-400 rounded-sm mt-8 focus:border-yellow-300 focus:outline-none'
        />
        <input
          name='price'
          value={post.price}
          onChange={handleChange}
          type='text'
          placeholder='Giá'
          required
          className='w-full p-2 border border-gray-400 rounded-sm mt-8 focus:border-yellow-300 focus:outline-none'
        />
        <textarea
          name='description'
          onChange={handleChange}
          value={post.description}
          required
          className='w-full h-16 min-h-max mt-8 px-2 py-1 rounded-sm focus:border-yellow-300 border border-gray-400 outline-none'
          placeholder='Mô tả'
        ></textarea>
        <textarea
          name='address'
          value={post.address}
          onChange={handleChange}
          required
          className='w-full h-16 min-h-max mt-8 px-2 py-1 rounded-sm focus:border-yellow-300 border border-gray-400 outline-none'
          placeholder='Địa chỉ'
        ></textarea>
        <label className='text-left font-medium text-xl mt-4 text-black'>
          Thông tin chi tiết sản phẩm
        </label>
        <input
          name='branchName'
          value={post.branchName}
          onChange={handleChange}
          type='text'
          placeholder='Hãng sản xuất'
          required
          className='w-full p-2 pt-1 border border-gray-400 rounded-sm mt-8 focus:border-yellow-300 focus:outline-none'
        />
        <input
          name='year'
          value={post.year}
          onChange={handleChange}
          type='text'
          placeholder='Năm sản xuât'
          required
          className='w-full p-2 border border-gray-400 rounded-sm mt-8 focus:border-yellow-300 focus:outline-none'
        />
        <input
          name='warranty'
          value={post.warranty}
          onChange={handleChange}
          type='text'
          placeholder='Bảo hành'
          required
          className='w-full p-2 border border-gray-400 rounded-sm mt-8 focus:border-yellow-300 focus:outline-none'
        />
        <input
          name='version'
          value={post.version}
          onChange={handleChange}
          type='text'
          placeholder='Phiên bản (nếu có)'
          className='w-full p-2 border border-gray-400 rounded-sm mt-8 focus:border-yellow-300 focus:outline-none'
        />
      </form>
      <label className='text-left text-black font-medium text-xl mt-4'>
        Hình ảnh
      </label>
      <div>
        {post.images.length + images.length < 4 && (
          <input type='file' multiple max='4' onChange={handleAddNewImage} />
        )}
      </div>
      <ul className=' min-h-300 grid grid-cols-4 gap-2 selection:p-5 mt-4 p-4  border-2 border-dashed border-primary'>
        {post.images.map((image, index) => {
          return (
            <li key={index}>
              <img
                src={image}
                alt={index}
                className='w-full object-contain object-center'
              />
            </li>
          );
        })}
        {images.length > 0 &&
          images.map((file, index) => {
            const imgURL = URL.createObjectURL(file);
            return (
              <li key={index}>
                <img
                  src={imgURL}
                  alt={index}
                  className='w-full object-contain object-center'
                />
              </li>
            );
          })}
      </ul>
      <button
        onClick={handleSubmit}
        className='my-4 px-4 py-2 text-white text-bold text-lg border rounded-r bg-primary hover:opacity-80'
      >
        Lưu
      </button>
    </section>
  );
};

export default ViewPost;
