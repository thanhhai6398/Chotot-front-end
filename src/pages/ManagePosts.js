import React, { useEffect, useState } from 'react';
import useAuth from '~/hooks/useAuth';
import Postitem from '~/components/Postitem';
import { httpGetPostByUserId } from '~/apiServices/postService';

const ManagePosts = () => {
  const { auth } = useAuth();
  const [posts, setPosts] = useState([]);
  const [count, setCount] = useState(0);
  useEffect(() => {
    const getPosts = async () => {
      const response = await httpGetPostByUserId(auth?.user._id);
      console.log(response);
      setPosts(response.data);
      setCount(response.data?.length);
    };
    getPosts();
  }, []);
  return (
    <div className='bg-white mx-auto max-w-xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
      <div className='p-4 border-b-2 border-primary'>
        <h2 className='text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl flex items-center'>
          Quản lý tin{' '}
          <span className='font-light ml-1 text-gray-400'>- {count} tin</span>
        </h2>
      </div>
      <ul className='p-4'>
        {posts
          ? posts.map((post) => {
              return (
                <li key={post._id}>
                  <Postitem post={post} />
                </li>
              );
            })
          : 'Không có tin nào'}
      </ul>
    </div>
  );
};

export default ManagePosts;
