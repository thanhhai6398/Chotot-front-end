import React from 'react';
import { Link } from 'react-router-dom';
import ImageGallery from './ImageGallery';

const Detail = ({ post }) => {
  console.log(post);
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
                  <Link
                    to='#'
                    className='text-lg font-medium text-indigo-600 hover:text-indigo-500'
                  >
                    <svg
                      class='text-red-400 w-6 h-auto fill-current'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 512 512'
                    >
                      <path d='M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z' />
                    </svg>
                    Lưu tin
                  </Link>
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
