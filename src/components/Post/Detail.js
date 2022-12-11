import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ImageGallery from './ImageGallery';
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import ReactLoading from "react-loading";
import * as request from '~/utils/request';
import { httpGetPostsSaved } from '~/apiServices/postService';

const Detail = ({ post }) => {
  console.log(post);
  const [saveLoading, setSaveLoading] = useState(false);
  const [listPostsSaved, setListPostsSaved] = useState([]);
  useEffect(() => {
    const getPostsSaved = async () => {
      const response = await httpGetPostsSaved();
      console.log(response.postsSaved);
      setListPostsSaved(response.postsSaved);
    };
    getPostsSaved();
  }, []);
  const searchValue = (postId, array) => {
    let new_array = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i]._id === postId) {
        new_array.push(array[i]);
      }
    }
    return new_array;
  }
  const save = async (postId, payload) => {
    setSaveLoading(true);
    try {
      const { data } = await request.patch(`/posts/savePost/${postId}`, payload);
      window.location.reload(false);
    } catch (error) {
      console.log(error);
    }
    setSaveLoading(false);
  };
  const unSave = async (postId, payload) => {
    setSaveLoading(true);
    try {
      const { data } = await request.patch(`/posts/unsavePost/${postId}`, payload);
      window.location.reload(false);
    } catch (error) {
      console.log(error);
    }
    setSaveLoading(false);
  };
  return (
    post.images && (
      <div className='bg-white'>
        <div className='pt-6 text-left'>
          <nav aria-label='Breadcrumb'>
            <ul className='mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
              <li>
                <div className='flex items-center'>
                  <Link className='mr-2 text-sm font-medium text-gray-900'>
                    {post?.category?.name}
                  </Link>
                  <svg
                    width={16}
                    height={20}
                    viewBox='0 0 16 20'
                    fill='currentColor'
                    xmlns='http://www.w3.org/2000/svg'
                    aria-hidden='true'
                    className='h-5 w-4 text-gray-300'
                  >
                    <path d='M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z' />
                  </svg>
                </div>
              </li>
              <li>
                <div className='flex items-center'>
                  <p className='mr-2 text-sm font-medium text-gray-900'>
                    {post.branchName}
                  </p>
                  <svg
                    width={16}
                    height={20}
                    viewBox='0 0 16 20'
                    fill='currentColor'
                    xmlns='http://www.w3.org/2000/svg'
                    aria-hidden='true'
                    className='h-5 w-4 text-gray-300'
                  >
                    <path d='M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z' />
                  </svg>
                </div>
              </li>
              <li className='text-sm'>
                <a
                  href={post.href}
                  aria-current='page'
                  className='font-medium text-gray-500 hover:text-gray-600'
                >
                  {post.title}
                </a>
              </li>
            </ul>
          </nav>
          {/* Image gallery */}
          <ImageGallery images={post.images} />
          {/* Product info */}
          <div className='mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24'>
            <div className='lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8'>
              <h1 className='text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl'>
                {post.title}
              </h1>
            </div>

            {/* Seller */}
            <div className='mt-4 lg:row-span-3 lg:mt-0'>
              <h2 className='text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl'>
                {' '}
                Người bán
              </h2>

              {/* Name */}
              <div className='mt-10'>
                <div className='flex items-center justify-between'>
                  <h3 className='text-lg font-medium text-gray-900'>
                    {post?.postedBy?.username}
                  </h3>
                  <button
                    href='#'
                    className='px-6 py-2 text-white bg-yellow-500 rounded-full hover:bg-yellow-300 hover:text-red-100'
                  >
                    Xem cửa hàng
                  </button>
                </div>
              </div>
            </div>

            <div className='py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8'>
              {/* Description and details */}
              <div className='mt-10'>
                <div className='flex items-center justify-between'>
                  <p className=' text-red-600 text-3xl tracking-tight'>
                    {post.price}
                  </p>
                  { searchValue(post._id, listPostsSaved).length>0 ? (
                    <button
                      className=' py-[6px] flex items-center justify-center gap-x-1 w-full rounded-sm hover:bg-[#e0e0e0] text-[#c22727] dark:hover:bg-[#3A3B3C] font-semibold text-[15px] dark:text-[#c22727] transition-50 cursor-pointer  '
                      onClick={() => unSave(post._id)}
                      disabled={saveLoading}>
                      {saveLoading ? (
                        <ReactLoading
                          type='bubbles'
                          width='14%'
                          height='14%'
                          color='#c22727'
                        />
                      ) : (
                        <>
                          <AiFillHeart className='text-xl translate-y-[1px] text-[#c22727] ' />
                          Lưu
                        </>
                      )}
                    </button>
                  ) : (
                    <button
                      className=' py-[6px] flex items-center justify-center gap-x-1 w-full rounded-sm hover:bg-[#e0e0e0] text-[#6A7583] dark:hover:bg-[#3A3B3C] font-semibold text-[15px] dark:text-[#b0b3b8] transition-50 cursor-pointer '
                      onClick={() => save(post._id)}
                      disabled={saveLoading}>
                      {saveLoading ? (
                        <ReactLoading
                          type='bubbles'
                          width='14%'
                          height='14%'
                          color='#6A7583'
                        />
                      ) : (
                        <>
                          <AiOutlineHeart className='text-xl translate-y-[1px] ' />
                          Lưu
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>
              <div>
                <h3 className='sr-only'>Description</h3>

                <div className='space-y-6'>
                  <p className='whitespace-pre text-base text-gray-900'>
                    {post.description}
                  </p>
                </div>
              </div>

              <div className='mt-10'>
                <h3 className='text-lg font-medium text-gray-900'>Chi tiết</h3>

                <div className='mt-4'>
                  <p className='text-base leading-4 mt-4 text-gray-600'>
                    Ngày đăng: {post.datePosted}
                  </p>
                  <p className='text-base leading-4 mt-4 text-gray-600'>
                    Hãng SX: {post.branchName}
                  </p>
                  <p className='text-base leading-4 mt-4 text-gray-600'>
                    Năm SX: {post.year}
                  </p>
                  <p className='text-base leading-4 mt-4 text-gray-600'>
                    Bảo hành: {post.warranty}
                  </p>
                </div>
              </div>

              <div className='mt-10'>
                <h2 className='text-lg font-medium text-gray-900'>Khu vực</h2>

                <div className='mt-4 space-y-6'>
                  <p className='text-lg text-gray-600'>{post.address}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Detail;
