import React, { useState, useContext } from 'react'
import { PostContext } from '~/context/PostProvider'

const ProductForm = () => {
  const { post, setPost } = useContext(PostContext)
  const [input, setInput] = useState(() => {
    const { branchName, year, warranty, version } = post
    return {
      branchName,
      year,
      warranty,
      version,
    }
  })
  const handleChange = (e) => {
    console.log(e.target)
    setInput({ ...input, [e.target.name]: e.target.value })
    setPost({ ...post, ...input })
  }
  return (
    <div>
      <h2 className="font-medium text-2xl">Thông tin chi tiết sản phẩm</h2>
      <form className="flex flex-col text-gray-500">
        <input
          name="branchName"
          value={input.branchName}
          onChange={handleChange}
          type="text"
          placeholder="Hãng sản xuất"
          required
          className="w-full p-2 border border-gray-400 rounded-sm mt-8 focus:border-yellow-300 focus:outline-none"
        />
        <input
          name="year"
          value={input.year}
          onChange={handleChange}
          type="text"
          placeholder="Năm sản xuât"
          required
          className="w-full p-2 border border-gray-400 rounded-sm mt-8 focus:border-yellow-300 focus:outline-none"
        />
        <input
          name="warranty"
          value={input.warranty}
          onChange={handleChange}
          type="text"
          placeholder="Bảo hành"
          required
          className="w-full p-2 border border-gray-400 rounded-sm mt-8 focus:border-yellow-300 focus:outline-none"
        />
        <input
          name="version"
          value={input.version}
          onChange={handleChange}
          type="text"
          placeholder="Phiên bản (nếu có)"
          className="w-full p-2 border border-gray-400 rounded-sm mt-8 focus:border-yellow-300 focus:outline-none"
        />
      </form>
    </div>
  )
}

export default ProductForm
