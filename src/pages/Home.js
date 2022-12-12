/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import ListCategories from '~/components/ListCategories';
import Posts from '~/components/Post/Posts';
import { useState } from 'react';
import { httpGetPostByStatusId } from '~/apiServices/postService';

const Home = () => {
  const [post, setPost] = useState({ title: 'Tin dành cho bạn', posts: [] });
  const [category, setCategory] = useState({ _id: 0, name: 'Tất cả' });

  useEffect(() => {
    const getPost = async () => {
      const allPost = await httpGetPostByStatusId();
      console.log(allPost);
      if (category._id === 0) {
        setPost({ title: 'Tất cả', posts: allPost.data });
      } else {
        const postsByCateId = allPost.data.filter(
          (p) => p.category._id === category._id
        );
        setPost({ title: category.name, posts: postsByCateId });
      }
    };

    getPost();
  }, [category]);

  return (
    <div className='mx-auto max-w-5xl lg:max-w-7xl lg:px-8 py-3 px-2'>
      <ListCategories setCategory={setCategory} />
      <Posts post={post.posts} title={post.title} />
    </div>
  );
};

export default Home;
