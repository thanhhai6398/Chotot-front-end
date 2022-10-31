import React, { useState } from 'react'

const ImagesForm = () => {
    const [images, setImages] = useState([]);
    const handleChange = (e) => {
        const img = URL.createObjectURL(e.target.files[0])
        setImages([...images, img])
    }
    return (
        <div>
            <h2 className='font-medium text-2xl py-1'>Hình ảnh</h2>
            <div>
                <input type='file' multiple onChange={handleChange} />
            </div>
            <ul className='flex flex-wrap gap-2 p-5 mt-4'>
                {
                    images.map((image, index) => {
                        return <li key={index} className='w-1/4'>
                            <img src={image} alt={index} className='object-fill' />
                        </li>
                    })
                }
            </ul>

        </div>
    )
}

export default ImagesForm