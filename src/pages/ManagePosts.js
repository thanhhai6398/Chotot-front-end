import React, { useEffect, useState } from 'react';
import Postitem from '~/components/Postitem';
import { post } from '~/utils/request';
const posts = [
  {
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
    ],
    description:
      'Cam kết zin nguyên bản - Không Zin Tặng Máy - ( Bảo hành 1/2023 Chính Hãng VN ) - Zin chất đẹp 99%',
    address: 'Phường 13, Quận 4, Tp Hồ Chí Minh',
    postedBy: {
      username: 'Thanh Phong Store',
      phone: '0335489456',
      address: 'Thủ Đức, Tp. HCM',
    },
  },
  {
    id: '2',
    title: 'iPhone 13 Pro Max 256G VN',
    price: '20.900.000',
    href: '#',
    category: 'Dien thoai',
    branchName: 'Apple',
    year: '2020',
    warranty: 'Không',
    datePosted: '2022/08/15',
    images: [
      {
        src: 'https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-xanh-xa-1.jpg',
        alt: 'Two each of gray, white, and black shirts laying flat.',
      },
    ],
    description:
      'Cam kết zin nguyên bản - Không Zin Tặng Máy - ( Bảo hành 1/2023 Chính Hãng VN ) - Zin chất đẹp 99%',
    address: 'Phường 13, Quận 4, Tp Hồ Chí Minh',
    postedBy: {
      username: 'Nam Store',
      phone: '0335489456',
      address: 'Q4, Tp. HCM',
    },
  },
];
const ManagePosts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {}, []);
  return (
    <div className='bg-white mx-auto max-w-xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
      <div className='p-4 border-b-2 border-primary'>
        <h2 className='text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl flex items-center'>
          Quản lý tin{' '}
          <span className='font-light ml-1 text-gray-400'>- 10 tin</span>
        </h2>
      </div>
      <ul className='p-4'>
        {posts.map((post) => {
          return (
            <li>
              <Postitem post={post} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ManagePosts;
