import React, { useContext, useState } from 'react';
import { PostContext } from '~/context/PostProvider';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'
import { ImagesForm, GeneralForm, ProductForm } from '~/components/PostForm'
import postcss from 'postcss';


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
    // const initValue = {
    //     title: '',
    //     price: '',
    //     description: '',
    //     address: '',

    //     images: [],

    //     branchName: '',
    //     year: '',
    //     warranty: '',
    //     category: '',
    //     postedBy: ''
    // }
    // const [post, setPost] = useState(initValue);
    const [post] = useContext(PostContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (post.images.length > 0) {
            alert('success')
            console.log(post);
        }
        console.log(post);

    }
    return (
        <section className='max-w-screen-lg min-h-screen mx-auto bg-white p-8 flex flex-col text-center'>
            <div className='mx-auto rounded-lg w-3/4 px-8 py-4'>
                {console.log(post)}
                {handleForm()}
            </div>
            <div className='my-8 text-white text-bold'>
                {page > 0 && <button onClick={handlePrev} className='px-4 py-2 border rounded-l bg-red-400 hover:opacity-80'><FaArrowLeft /></button>}
                {page < list.length - 1 && <button onClick={handleNext} className='px-4 py-2  border rounded-r bg-green-400 hover:opacity-80'><FaArrowRight /></button>}
            </div>
            {page === list.length - 1 && <button onClick={handleSubmit} className='px-4 py-2 text-white text-bold text-lg border rounded-r bg-primary hover:opacity-80'>Lưu</button>}
        </section >
    )
}

export default AddPost