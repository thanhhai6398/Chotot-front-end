/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useContext, useEffect } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { PostContext } from '~/contexts/PostProvider';
import { uploadImages } from '~/apiServices/uploadImagesService';
import Form from '~/components/Form/Form';
import { httpEditPost } from '~/apiServices/postService';

const EditPost = () => {
  const { post, setPost, handleClear } = useContext(PostContext);
  const [isPending, setPending] = useState(false);
  const { id } = useParams();
  const currentPost = useLocation().state.post;
  useEffect(() => {
    setPost(currentPost);
  }, [id]);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (post.images.length > 0) {
      try {
        setPending(true);
        const imagesURLs = await uploadImages(post.category, post.images);
        const newPost = { ...post, images: imagesURLs };
        setTimeout(async () => {
          const response = null;
          handleClear();
          console.log(response.data);
          setPending(false);
          /* */
          navigate('/managePosts');
        }, 5000);
      } catch (error) {
        console.log(error.message);
      }
    } else console.log('Image is require');
  };
  return <Form handleSubmit={handleSubmit} isPending={isPending} />;
};

export default EditPost;
