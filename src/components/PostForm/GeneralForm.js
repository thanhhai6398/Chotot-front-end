import React, { useContext, useLayoutEffect, useState } from 'react'
import { httpGetAllCategories } from '~/apiServices/categoryServices'
import { PostContext } from '~/context/PostProvider'

const GeneralForm = () => {
    const [cates, setCates] = useState()
    const { post, setPost } = useContext(PostContext)
    const [input, setInput] = useState(() => {
        const { title, category, price, description, address } = post;
        return { title, category, price, description, address };

    })
    const handleChange = (e) => {
        console.log(e.target)
        setInput({ ...input, [e.target.name]: e.target.value })
        setPost({ ...post, ...input })
    }
    useLayoutEffect(() => {
        const getAllCategories = async () => {
            const response = await httpGetAllCategories()
            setCates(response)
        }
        getAllCategories()
    }, [])
    const handleSelectCate = () => {
        console.log(cates)
        return cates.map((category) => {
            return (
                <option key={category['_id']} value={category['_id']}>
                    {category.name}
                </option>
            )
        })
    }
    return (
        <div>
            <h2 className="font-medium text-2xl">Thông tin chung</h2>
            <form className="flex flex-col text-gray-500">
                <select
                    name='category'
                    value={input.category}
                    onChange={handleChange}
                    className="p-2 border border-gray-400 rounded-sm mt-8 focus:border-yellow-300 focus:outline-none"
                    defaultValue="default"
                    required
                >
                    {cates && handleSelectCate()}
                </select>
                <input
                    name="title"
                    value={input.title}
                    onChange={handleChange}
                    type="text"
                    placeholder="Tiêu dề"
                    required
                    className="w-full capitalize p-2 border border-gray-400 rounded-sm mt-8 focus:border-yellow-300 focus:outline-none"
                />
                <input
                    name="price"
                    value={input.price}
                    onChange={handleChange}
                    type="text"
                    placeholder="Giá"
                    required
                    className="w-full p-2 border border-gray-400 rounded-sm mt-8 focus:border-yellow-300 focus:outline-none"
                />
                <textarea
                    name="description"
                    onChange={handleChange}
                    value={input.description}
                    required
                    className="w-full h-16 min-h-max mt-8 px-2 py-1 rounded-sm focus:border-yellow-300 border border-gray-400 outline-none"
                    placeholder="Mô tả"
                ></textarea>
                <textarea
                    name="address"
                    value={input.address}
                    onChange={handleChange}
                    required
                    className="w-full h-16 min-h-max mt-8 px-2 py-1 rounded-sm focus:border-yellow-300 border border-gray-400 outline-none"
                    placeholder="Địa chỉ"
                ></textarea>
            </form>
        </div>
    )
}

export default GeneralForm
