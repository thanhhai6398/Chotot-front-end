import React, { useState } from 'react';
import { useEffect } from 'react';
import * as request from '~/utils/request';

const Menu = () => {
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState('');
    useEffect(() => {
        const getAllCategories = async () => {
            try {
                const cates = await request.get('/categories');
                console.log(cates)
                setCategories(cates.data)
            } catch (error) {
                setError(error.message)
            }
        }
        getAllCategories();
    }, [])
    return (
        <div className='Menu'>
            <h1>Menu</h1>
            {error && <p className='red'>{error}</p>}
            <ul>
                {
                    categories.map((cate, index) =>
                        <li key={index}>{cate.name}</li>
                    )
                }
            </ul>
        </div>
    )
}

export default Menu