import React, { useState } from 'react';
import { POST_STATUS } from '~/utils/Enum';
import { httpPutActivePost, httpPutHidePost } from '~/apiServices/postService';

const Postitem = ({ post }) => {
  const [postItem, setPostItem] = useState(post);
  const handleUpdateStatus = async () => {
    const id = post._id;
    if (postItem.status === POST_STATUS.ACTIVE) {
      const response = await httpPutHidePost(id);
      setPostItem(response.data);
    }
    if (postItem.status === POST_STATUS.HIDE) {
      const response = await httpPutActivePost(id);
      setPostItem(response.data);
    }
  };
  return (
    <div className='flex py-6 border-b'>
      <div className='h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200'>
        <img
          className='h-full w-full object-contain object-center'
          src={postItem.images[0]}
          alt='post-img'
        />
      </div>
      <div className='ml-4 flex flex-1 flex-col'>
        <div>
          <div className='flex justify-between text-base font-medium text-gray-900'>
            <h3>
              <a href='/'>{postItem.title}</a>
            </h3>
          </div>
        </div>
        <div className='flex mt-2'>
          <p className='text-red-600 text-l mr-6'>{postItem.price}</p>
          {postItem.status === POST_STATUS.ACTIVE ? (
            <p className='text-green-600 flex items-center'>
              <span className='block w-2 h-2 bg-green-600 rounded-full mr-1'></span>
              Đang hoạt động
            </p>
          ) : postItem.status === POST_STATUS.HIDE ? (
            <p className='text-red-400 flex items-center'>
              <span className='block w-2 h-2 bg-red-600 rounded-full mr-1'></span>
              Đã ẩn
            </p>
          ) : (
            <p className='text-gray-400'>Chờ xác nhận</p>
          )}
        </div>
        <div className='flex flex-1 items-end justify-between text-sm'>
          <p className='text-gray-500'>{postItem.datePosted}</p>

          <div className='flex'>
            <button
              type='button'
              className='font-medium py-2 px-4 bg-primary text-white mr-4 rounded hover:opacity-70'
            >
              Cập nhật
            </button>
            <button
              type='button'
              onClick={handleUpdateStatus}
              className='font-medium py-2 px-4 bg-red-600 text-white rounded hover:opacity-70'
            >
              Hiện/Ẩn
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Postitem;
