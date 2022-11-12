import React, { useContext, useState } from 'react';
import { PostContext } from '~/context/PostProvider';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'
import { ImagesForm, GeneralForm, ProductForm } from '~/components/PostForm';
import { uploadImages } from '~/apiServices/uploadImagesService';

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
    const { post, setPost } = useContext(PostContext);
    const { isPending, setPending } = useContext(PostContext);
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (post.images.length > 0) {
            const images = await uploadImages('test', post.images);
            setPost({ ...post, images });
            setPending(false)
        }

    }
    return (
        <section className='max-w-screen-lg min-h-screen mx-auto bg-white p-8 flex flex-col text-center'>
            <div className='mx-auto rounded-lg w-3/4 px-8 py-4'>
                {handleForm()}
            </div>
            <div className='my-8 text-white text-bold'>
                {page > 0 && <button onClick={handlePrev} className='px-4 py-2 border rounded-l bg-red-400 hover:opacity-80'><FaArrowLeft /></button>}
                {page < list.length - 1 && <button onClick={handleNext} className='px-4 py-2  border rounded-r bg-green-400 hover:opacity-80'><FaArrowRight /></button>}
            </div>
            {isPending && <p>Loading.....</p>}
            {page === list.length - 1 && <button onClick={handleSubmit} className='px-4 py-2 text-white text-bold text-lg border rounded-r bg-primary hover:opacity-80'>Lưu</button>}
        </section >
    )
}

export default AddPost