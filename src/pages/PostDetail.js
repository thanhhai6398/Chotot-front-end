import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { httpGetPostById } from '~/apiServices/postService';
import Detail from '~/components/Post/Detail';
import ImageGallery from '~/components/Post/ImageGallery';

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});
  useEffect(() => {
    const getPostById = async () => {
      const response = await httpGetPostById(id);
      console.log(response.data);
      setPost(response.data);
    };
    getPostById();
  }, [id]);

  return <Detail post={post}></Detail>;
};

export default PostDetail;
