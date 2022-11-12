/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import { PostContext } from '~/context/PostProvider';

const ImagesForm = () => {

    const [images, setImages] = useState([]);

    const [showInput, setShowInput] = useState(true);
    //useContext
    const { setPost } = useContext(PostContext);
    const handleChange = async (e) => {
        for (let i = 0; i < e.target.files.length; i++) {
            const newImage = e.target.files[i];
            setImages((prevState) => [...prevState, newImage]);
        }
    }
    useEffect(() => {
        const updatePost = () => {
            setPost((prev) => {
                return {
                    ...prev,
                    images
                }
            });
        }
        const checkLength = () => {
            if (images.length > 0) {
                updatePost();
            }
            if (images.length >= 4) {
                setShowInput(false);
            }
            else setShowInput(true);
        }
        checkLength();

    }, [images]);
    return (
        <div>
            <h2 className='font-medium text-2xl py-1'>Hình ảnh</h2>
            <div>
                {showInput && <input type='file' multiple max="4" onChange={handleChange} />}
            </div>
            <ul className=' min-h-300 grid grid-cols-2 gap-2 selection:p-5 mt-4 p-4  border-2 border-dashed border-primary'>
                {
                    images.map((image, index) => {
                        const imgURL = URL.createObjectURL(image)
                        return <li key={index}>
                            <img src={imgURL} alt={index} className='w-full object-contain object-center' />
                        </li>
                    })
                }
            </ul>

        </div>
    )
}

export default ImagesForm;