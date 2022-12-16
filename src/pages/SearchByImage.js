import React, { useEffect, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import SelectCategory from '~/components/SelectCategory';
import { post } from '../utils/request';

const initValue = {
  file: '',
  url: '',
};
//const host = 'http://localhost:5000/posts/search/image';
const SearchByImage = () => {
  const [categoryId, setCategoryId] = useState();
  const [image, setImage] = useState(initValue);
  const [result, setResult] = useState('');
  useEffect(() => {}, [categoryId, image]);
  const handleChange = (e) => {
    setCategoryId(e.target.value);
  };
  const handleChangeImage = (e) => {
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);
    setImage({ file, url });
  };
  const handleSearchClick = async () => {
    try {
      const formData = new FormData();
      formData.append('searchImage', image.file);
      formData.append('categoryId', categoryId);
      //
      const res = await post('/posts/search/image', formData);
      //console.log(res.data);
      // setCategoryId('');
      // setImage(initValue);
      console.log(res.data);
      setResult(image.url);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className='mx-auto w-1/2 flex flex-col items-center lg:max-w-7xl lg:px-8 bg-white py-16'>
      <h1 className='text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl'>
        Tìm kiếm bằng hình ảnh
      </h1>
      <SelectCategory
        className='w-full'
        currentValue={categoryId}
        handleChange={handleChange}
      />
      <button
        className='text-lg py-2 self-start underline decoration-solid mt-4'
        onClick={() => setImage(initValue)}
      >
        Thay đổi ảnh
      </button>
      <div className='w-full min-h-300 max-h-80 mb-8 flex justify-center items-center border-2 border-dashed border-primary'>
        {!image.file && (
          <input type='file' name='image' onChange={handleChangeImage} />
        )}
        {image.url && (
          <img
            className='max-w-xs max-h-80 object-contain'
            src={image.url}
            alt={image.file.name}
          />
        )}
      </div>
      <button
        onClick={handleSearchClick}
        className='bg-orange-500 rounded px-5 ml-1 w-full h-10 flex justify-center items-center'
      >
        <AiOutlineSearch className='text-2xl text-white' />
      </button>
      <img src={result} alt='ket qua tim kiem' />
    </div>
  );
};
export default SearchByImage;
