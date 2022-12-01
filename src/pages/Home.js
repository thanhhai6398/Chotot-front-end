import React, { useEffect } from 'react';
import ListCategories from '~/components/ListCategories';
import Posts from '~/components/Post/Posts';
import { useState } from 'react';
import { httpGetPostByStatusId } from '~/apiServices/postService';
const categories = [
  {
    name: 'Do dien tu',
    image:
      'https://lighthouse.chotot.com/_next/image?url=https%3A%2F%2Fstatic.chotot.com%2Fstorage%2Fchapy-pro%2Fnewcats%2Fv8%2F5000.png&w=256&q=95',
  },
  {
    name: 'Xe co',
    image:
      'https://lighthouse.chotot.com/_next/image?url=https%3A%2F%2Fstatic.chotot.com%2Fstorage%2Fchapy-pro%2Fnewcats%2Fv8%2F2000.png&w=256&q=95',
  },
  {
    name: 'Do dien tu',
    image:
      'https://lighthouse.chotot.com/_next/image?url=https%3A%2F%2Fstatic.chotot.com%2Fstorage%2Fchapy-pro%2Fnewcats%2Fv8%2F5000.png&w=256&q=95',
  },
  {
    name: 'Xe co',
    image:
      'https://lighthouse.chotot.com/_next/image?url=https%3A%2F%2Fstatic.chotot.com%2Fstorage%2Fchapy-pro%2Fnewcats%2Fv8%2F2000.png&w=256&q=95',
  },
  {
    name: 'Do dien tu',
    image:
      'https://lighthouse.chotot.com/_next/image?url=https%3A%2F%2Fstatic.chotot.com%2Fstorage%2Fchapy-pro%2Fnewcats%2Fv8%2F5000.png&w=256&q=95',
  },
  {
    name: 'Xe co',
    image:
      'https://lighthouse.chotot.com/_next/image?url=https%3A%2F%2Fstatic.chotot.com%2Fstorage%2Fchapy-pro%2Fnewcats%2Fv8%2F2000.png&w=256&q=95',
  },
  {
    name: 'Do dien tu',
    image:
      'https://lighthouse.chotot.com/_next/image?url=https%3A%2F%2Fstatic.chotot.com%2Fstorage%2Fchapy-pro%2Fnewcats%2Fv8%2F5000.png&w=256&q=95',
  },
  {
    name: 'Xe co',
    image:
      'data:image/jpeg;base64,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',
  },
];

const Home = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    const getAllPost = async () => {
      const response = await httpGetPostByStatusId();
      console.log(response);
      setPost(response.data);
    };
    getAllPost();
  }, []);

  return (
    <div className='mx-auto max-w-5xl lg:max-w-7xl lg:px-8 py-3 px-2'>
      <ListCategories categories={categories} />
      <Posts post={post} />
    </div>
  );
};

export default Home;
