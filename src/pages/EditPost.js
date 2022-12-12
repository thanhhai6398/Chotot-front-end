/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { uploadImages } from '~/apiServices/uploadImagesService';
import { httpEditPost } from '~/apiServices/postService';
import ViewPost from '~/components/Post/ViewPost';

const EditPost = () => {
  const { id } = useParams();
  const currentPost = useLocation().state.post;
  const [post, setPost] = useState(currentPost);
  const [isPending, setPending] = useState(false);
  const navigate = useNavigate();
  const updateImage = async () => {
    if (!post?.newImages.length) {
      return null;
    }
    return new Promise(async (resolve, reject) => {
      const newImgURLs = await uploadImages(
        post.category._id || post.category,
        post.newImages
      );
      resolve(newImgURLs);
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newPost = { ...post };
      if (post?.newImages) {
        const newImgURLs = await uploadImages(
          post.category._id || post.category,
          post.newImages
        );
        console.log(newImgURLs);
        newPost.images.push(...newImgURLs);
      }
      setTimeout(async () => {
        console.log(newPost.images);
        const response = await httpEditPost(id, newPost);
        console.log(response.data);
        setPending(false);
        /* */
        navigate('/managePosts');
      }, 5000);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      {isPending && <p>Loading.....</p>}
      <ViewPost post={post} setPost={setPost} handleSubmit={handleSubmit} />
    </div>
  );
};

export default EditPost;
