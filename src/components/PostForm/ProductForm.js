import React from 'react'

const ProductForm = () => {
    return (
        <div>
            <h2 className='font-medium text-2xl'>Thông tin chi tiết sản phẩm</h2>
            <form className='flex flex-col text-gray-400'>
                <input type='text' placeholder='Hãng sản xuất' required className='w-full p-2 border border-gray-400 rounded-sm mt-8 focus:border-yellow-300 focus:outline-none' />
                <input type='text' placeholder='Năm sản xuât' required className='w-full p-2 border border-gray-400 rounded-sm mt-8 focus:border-yellow-300 focus:outline-none' />
                <input type='text' placeholder='Bảo hành' required className='w-full p-2 border border-gray-400 rounded-sm mt-8 focus:border-yellow-300 focus:outline-none' />
                <input type='text' placeholder='Phiên bản (nếu có)' className='w-full p-2 border border-gray-400 rounded-sm mt-8 focus:border-yellow-300 focus:outline-none' />
            </form>
        </div>
    )
}

export default ProductForm