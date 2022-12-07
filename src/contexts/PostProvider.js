/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useEffect, useState } from 'react';
import useAuth from '~/hooks/useAuth';
export const PostContext = createContext({});

const PostProvider = ({ children }) => {
  const { auth } = useAuth();
  const initValue = {
    title: '',
    category: '',
    price: '',
    description: '',
    address: '',

    images: [],

    branchName: '',
    year: '',
    warranty: '',
    version: '',
    postedBy: '',
  };
  useEffect(() => {
    if (auth.user) {
      setPost({ ...post, postedBy: auth.user._id });
    }
  }, [auth]);
  const handleClear = () => {
    setPost(initValue);
  };
  const [post, setPost] = useState(initValue);
  return (
    <PostContext.Provider value={{ post, setPost, handleClear }}>
      {children}
    </PostContext.Provider>
  );
};

export default PostProvider;