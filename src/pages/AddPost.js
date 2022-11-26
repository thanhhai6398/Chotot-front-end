import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PostContext } from '~/contexts/PostProvider';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { ImagesForm, GeneralForm, ProductForm } from '~/components/Form';
import { uploadImages } from '~/apiServices/uploadImagesService';
import { httpAddPost } from '~/apiServices/postService';

const AddPost = () => {
  const list = ['GeneralForm', 'ProductForm', 'ImagesForm'];
  const [page, setPage] = useState(0);
  const [isPending, setPending] = useState(false);
  const navigate = useNavigate();
  const handlePrev = () => {
    setPage((page) => (page === 0 ? 0 : page - 1));
  };
  const handleNext = () => {
    setPage((page) => (page === list.length - 1 ? 0 : page + 1));
  };
  const handleForm = () => {
    switch (page) {
      case 0:
        return <GeneralForm></GeneralForm>;
      case 1:
        return <ProductForm></ProductForm>;
      case 2:
        return <ImagesForm></ImagesForm>;
      default:
        return <GeneralForm></GeneralForm>;
    }
  };
  const { post } = useContext(PostContext);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (post.images.length > 0) {
      try {
        setPending(true);
        const imagesURLs = await uploadImages(post.category, post.images);
        const newPost = { ...post, images: imagesURLs };
        setTimeout(async () => {
          const response = await httpAddPost(newPost);
          console.log(response.data);
          setPending(false);
          /*=====pending
          navigate(`/post/${response.data['_id']}`);
          */
        }, 5000);
      } catch (error) {
        console.log(error.message);
      }
    } else console.log('Image is require');
  };
  return (
    <section className='max-w-screen-lg min-h-screen mx-auto bg-white p-8 flex flex-col text-center'>
      {isPending && <p>Loading.....</p>}
      <div className='mx-auto rounded-lg w-3/4 px-8 py-4'>{handleForm()}</div>
      <div className='my-8 text-white text-bold'>
        {page > 0 && (
          <button
            onClick={handlePrev}
            className='px-4 py-2 border rounded-l bg-red-400 hover:opacity-80'
          >
            <FaArrowLeft />
          </button>
        )}
        {page < list.length - 1 && (
          <button
            onClick={handleNext}
            className='px-4 py-2  border rounded-r bg-green-400 hover:opacity-80'
          >
            <FaArrowRight />
          </button>
        )}
      </div>
      {/* {isPending && <p>Loading.....</p>} */}
      {page === list.length - 1 && (
        <button
          onClick={handleSubmit}
          className='px-4 py-2 text-white text-bold text-lg border rounded-r bg-primary hover:opacity-80'
        >
          Lưu
        </button>
      )}
    </section>
  );
};

export default AddPost;
