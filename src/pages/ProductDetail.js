import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ImageGallery from '~/components/Product/ImageGallery'
import { httpGetPostById } from '~/apiServices/postService'
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
      src: 'https://cdn.chotot.com/DkrW6bDOMbCrpepTV6wjsDY2NYLn58aK_SMx9RixS7Q/preset:listing/plain/7ed7d41541aaa2e1f604ba2dfcdb16f3-2798514446698387849.jpg',
      alt: 'Two each of gray, white, and black shirts laying flat.',
    },
    {
      src: 'https://cdn.chotot.com/j1ghd6BagOsnuqJCRrozdQeVF51u2aYj1a9q9qoT6DA/preset:listing/plain/121682ca0bd5c06bf558e37af9a331b2-2798163823136164651.jpg',
      alt: 'Two each of gray, white, and black shirts laying flat.',
    },
    {
      src: 'https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-xanh-xa-1.jpg',
      alt: 'Two each of gray, white, and black shirts laying flat.',
    },
  ],
  description:
    'Cam kết zin nguyên bản - Không Zin Tặng Máy - ( Bảo hành 1/2023 Chính Hãng VN ) - Zin chất đẹp 99%',
  address: 'Phường 13, Quận 4, Tp Hồ Chí Minh',
}
const postedBy = {
  username: 'Thanh Phong Store',
  phone: '0335489456',
  address: 'Thủ Đức, Tp. HCM',
}

function ProductDetail() {
  const { id } = useParams()
  const [post, setPost] = useState({})
  useEffect(() => {
    const getPostById = async () => {
      const response = await httpGetPostById(id)
      setPost(response.data)
    }
    getPostById()
  }, [id])
  return (
    <div className="bg-white">
      {/* {product.filter(item => item.id === id).map(product => ( */}
      <div className="pt-6 text-left">
        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            <li>
              <div className="flex items-center">
                <a className="mr-2 text-sm font-medium text-gray-900">
                  {post.category.name}
                </a>
                <svg
                  width={16}
                  height={20}
                  viewBox="0 0 16 20"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="h-5 w-4 text-gray-300"
                >
                  <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                </svg>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <a className="mr-2 text-sm font-medium text-gray-900">
                  {post.branchName}
                </a>
                <svg
                  width={16}
                  height={20}
                  viewBox="0 0 16 20"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="h-5 w-4 text-gray-300"
                >
                  <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                </svg>
              </div>
            </li>
            <li className="text-sm">
              {product.title}
              {/* <a
                href={post.href}
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600"
              >
                {product.title}
              </a> */}
            </li>
          </ol>
        </nav>

        {/* Image gallery */}
        <ImageGallery images={post.images} />
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
        <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {post.title}
            </h1>
          </div>

          {/* Seller */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {' '}
              Người bán
            </h2>

            {/* Name */}
            <div className="mt-10">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-gray-900">
                  {postedBy.username}
                </h3>
                <button
                  href="#"
                  className="px-6 py-2 text-white bg-yellow-500 rounded-full hover:bg-yellow-300 hover:text-red-100"
                >
                  Xem cửa hàng
                </button>
              </div>
            </div>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8">
            {/* Description and details */}
            <div className="mt-10">
              <div className="flex items-center justify-between">
                <p className=" text-red-600 text-3xl tracking-tight text-gray-900">
                  {product.price}
                </p>
                <a
                  href="/save"
                  className="flex flex-col items-center text-lg font-medium text-indigo-600 hover:text-indigo-500"
                >
                  <svg
                    class="text-red-400 w-6 h-auto fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z" />
                  </svg>
                  Lưu tin
                </a>
              </div>
            </div>
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">{product.description}</p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-lg font-medium text-gray-900">Chi tiết</h3>

              <div className="mt-4">
                <p className="text-base leading-4 mt-4 text-gray-600">
                  Ngày đăng: {product.datePosted}
                </p>
                <p className="text-base leading-4 mt-4 text-gray-600">
                  Hãng SX: {product.branchName}
                </p>
                <p className="text-base leading-4 mt-4 text-gray-600">
                  Năm SX: {product.year}
                </p>
                <p className="text-base leading-4 mt-4 text-gray-600">
                  Bảo hành: {product.warranty}
                </p>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-lg font-medium text-gray-900">Khu vực</h2>

              <div className="mt-4 space-y-6">
                <p className="text-lg text-gray-600">{product.address}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ))} */}
    </div>
  )
}

export default ProductDetail
