import React from 'react'

const Postitem = ({ post }) => {
  return (
    <div className="flex py-6 border-b">
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img
          className="h-full w-full object-contain object-center"
          src={post.images[0].src}
          alt="post-img"
        />
      </div>
      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>
              <a href="/">{post.title}</a>
            </h3>
          </div>
        </div>
        <div className="flex mt-2">
          <p className="text-red-600 text-l mr-6">{post.price}</p>
          {/* <p className="text-gray-400">Đã ẩn</p> */}
          <p className="text-green-600 flex items-center"><div className='w-2 h-2 bg-green-600 rounded-full mr-1'></div>Đang hoạt động</p>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <p className="text-gray-500">{post.datePosted}</p>

          <div className="flex">
            <button
              type="button"
              className="font-medium py-2 px-4 bg-primary text-white mr-4 rounded hover:opacity-70"
            >
              Cập nhật
            </button>
            <button
              type="button"
              className="font-medium py-2 px-4 bg-red-600 text-white rounded hover:opacity-70"
            >
              Hiện/Ẩn
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Postitem
