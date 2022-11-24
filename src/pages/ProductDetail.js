import React from 'react';
import { useParams } from 'react-router-dom';
import ImageGallery from '~/components/Product/ImageGallery';
const product = {
  id: '1',
  title: 'iPhone 13 Pro Max 256G VN - Zin chuẩn',
  price: '23.900.000',
  href: '#',
  category: 'Dien thoai',
  branchName: 'Apple',
  year: '2020',
  warranty: 'Không',
  datePosted: '',
  images: [
    {
      src: 'https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-xanh-xa-1.jpg',
      alt: 'Two each of gray, white, and black shirts laying flat.',
    },
    {
      src: 'data:image/jpeg;base64,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',
      alt: 'Two each of gray, white, and black shirts laying flat.',
    },
    // {
    //   src: 'data:image/jpeg;base64,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',
    //   alt: 'Two each of gray, white, and black shirts laying flat.',
    // },
    // {
    //   src: 'https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-xanh-xa-1.jpg',
    //   alt: 'Two each of gray, white, and black shirts laying flat.',
    // },
  ],
  description:
    'Cam kết zin nguyên bản - Không Zin Tặng Máy - ( Bảo hành 1/2023 Chính Hãng VN ) - Zin chất đẹp 99%',
  address: 'Phường 13, Quận 4, Tp Hồ Chí Minh',
};
const postedBy = {
  username: 'Thanh Phong Store',
  phone: '0335489456',
  address: 'Thủ Đức, Tp. HCM',
};

function ProductDetail() {
  const { id } = useParams();
  return (
    <div className='bg-white'>
      {/* {product.filter(item => item.id === id).map(product => ( */}
      <div className='pt-6 text-left'>
        <nav aria-label='Breadcrumb'>
          <ol
            role='list'
            className='mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8'
          >
            <li>
              <div className='flex items-center'>
                <a className='mr-2 text-sm font-medium text-gray-900'>
                  {product.category}
                </a>
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
                <a className='mr-2 text-sm font-medium text-gray-900'>
                  {product.branchName}
                </a>
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
                href={product.href}
                aria-current='page'
                className='font-medium text-gray-500 hover:text-gray-600'
              >
                {product.title}
              </a>
            </li>
          </ol>
        </nav>

        {/* Image gallery */}
        <ImageGallery images={product.images} />
        {/*
                <div className="mx-auto mt-6 max-w-xl sm:px-6">
                    <div className="aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
                        <img
                            src={product.images[0].src}
                            alt={product.images[0].alt}
                            className="h-full w-full object-cover object-center"
                        />
                    </div>
                </div> */}

        {/* Product info */}
        <div className='mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24'>
          <div className='lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8'>
            <h1 className='text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl'>
              {product.title}
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
                  {postedBy.username}
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
                <p className=' text-red-600 text-3xl tracking-tight text-gray-900'>
                  {product.price}
                </p>
                <a
                  href='/save'
                  className='flex flex-col items-center text-lg font-medium text-indigo-600 hover:text-indigo-500'
                >
                  <svg
                    class='text-red-400 w-6 h-auto fill-current'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 512 512'
                  >
                    <path d='M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z' />
                  </svg>
                  Lưu tin
                </a>
              </div>
            </div>
            <div>
              <h3 className='sr-only'>Description</h3>

              <div className='space-y-6'>
                <p className='text-base text-gray-900'>{product.description}</p>
              </div>
            </div>

            <div className='mt-10'>
              <h3 className='text-lg font-medium text-gray-900'>Chi tiết</h3>

              <div className='mt-4'>
                <p className='text-base leading-4 mt-4 text-gray-600'>
                  Ngày đăng: {product.datePosted}
                </p>
                <p className='text-base leading-4 mt-4 text-gray-600'>
                  Hãng SX: {product.branchName}
                </p>
                <p className='text-base leading-4 mt-4 text-gray-600'>
                  Năm SX: {product.year}
                </p>
                <p className='text-base leading-4 mt-4 text-gray-600'>
                  Bảo hành: {product.warranty}
                </p>
              </div>
            </div>

            <div className='mt-10'>
              <h2 className='text-lg font-medium text-gray-900'>Khu vực</h2>

              <div className='mt-4 space-y-6'>
                <p className='text-lg text-gray-600'>{product.address}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ))} */}
    </div>
  );
}

export default ProductDetail;
