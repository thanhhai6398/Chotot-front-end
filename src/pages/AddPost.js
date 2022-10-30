import React, { useState } from 'react'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'
import { ImagesForm, GeneralForm, ProductForm } from '~/components/PostForm'


const AddPost = () => {
    const list = ['GeneralForm', 'ProductForm', 'ImagesForm']
    const [page, setPage] = useState(0);
    const handlePrev = () => {
        setPage((page) => page === 0 ? 0 : page - 1);
    }
    const handleNext = () => {
        setPage((page) => page === list.length - 1 ? 0 : page + 1);
    }
    const handleForm = () => {
        switch (page) {
            case 0: return <GeneralForm ></GeneralForm>
            case 1: return <ProductForm ></ProductForm>
            case 2: return <ImagesForm></ImagesForm>
            default: return <GeneralForm></GeneralForm>
        }
    }
    return (
        <section className='max-w-screen-lg mx-auto bg-white p-8 flex justify-center flex-col'>
            <div className=' mx-auto rounded-lg w-3/4 px-8 py-8 text-center'>
                {handleForm()}
            </div>
            <div className='my-8 text-gray-400 text-bold'>
                {page > 0 && <button onClick={handlePrev} className='px-4 py-2 border rounded-l hover:text-yellow-400'><FaArrowLeft /></button>}
                <button onClick={handleNext} className='px-4 py-2  border rounded-r hover:text-yellow-400'><FaArrowRight /></button>
            </div>
        </section>
    )
}

export default AddPost