import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PostContext } from '~/contexts/PostProvider';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { ImagesForm, GeneralForm, ProductForm } from '~/components/Form';
import { uploadImages } from '~/apiServices/uploadImagesService';
import { httpAddPost } from '~/apiServices/postService';
import PostProvider from '~/contexts/PostProvider';

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
  const { post, setPost } = useContext(PostContext);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(post);
    // if (post.images.length > 0) {
    //   try {
    //     setPending(true)
    //     const imagesURLs = await uploadImages(post.category, post.images)
    //     const response = await httpAddPost({ ...post, images: imagesURLs })
    //     console.log(response)
    //     setPending(false)
    //   } catch (error) {
    //     console.log(error.message)
    //   }

    //   // uploadImages(post.category, post.images)
    //   //   .then(async (imagesURLs) => {
    //   //     const postToAdd = { ...post, images: imagesURLs }
    //   //     console.log(postToAdd)
    //   //     const response = await httpAddPost(postToAdd)
    //   //     console.log(response)
    //   //     setPending(false)
    //   //     //navigate(`/products/${response.data['_id']}`)
    //   //     // if (response.ok) {
    //   //     //   setPending(false)
    //   //     //   navigate(`/products/${response.data['_id']}`)
    //   //     // } else alert('Failed')
    //   //   })
    //   //   .catch((err) => console.log(err))
    // }
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
