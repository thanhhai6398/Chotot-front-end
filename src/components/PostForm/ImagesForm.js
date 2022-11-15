import React, { useContext, useEffect, useState } from 'react';
import {
    ref,
    uploadBytes,
    getDownloadURL,
    listAll,
    list,
} from "firebase/storage";
import { storage } from '~/firebase';
import { PostContext } from '~/context/PostProvider';
import { async } from '@firebase/util';

const ImagesForm = ({ category }) => {
    /*ref*/
    const imagesListRef = ref(storage, `${category}/`);
    const [images, setImages] = useState([]);
    const [urls, setUrls] = useState([]);
    const [showInput, setShowInput] = useState(true);
    //useContext
    const [post, setPost] = useContext(PostContext);
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
            if (images.length > 1) {
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