import React from 'react'

const GeneralForm = () => {
    return (
        <div>
            <h2 className='font-medium text-2xl py-2'>Thông tin chung</h2>
            <form className='flex flex-col text-gray-400'>
                <input type='text' placeholder='Tiêu dề' required className='w-full p-2 border border-gray-400 rounded-sm mt-8 focus:border-yellow-300 focus:outline-none' />
                <input type='text' placeholder='Giá' required className='w-full p-2 border border-gray-400 rounded-sm mt-8 focus:border-yellow-300 focus:outline-none' />
                <textarea required className='w-full h-16 min-h-max mt-8 px-2 py-1 rounded-sm focus:border-yellow-300 border border-gray-400 outline-none' placeholder='Mô tả'></textarea>
                <textarea required className='w-full h-16 min-h-max mt-8 px-2 py-1 rounded-sm focus:border-yellow-300 border border-gray-400 outline-none' placeholder='Địa chỉ'></textarea>
            </form>
        </div>
    )
}

export default GeneralForm