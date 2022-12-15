import { useState, useEffect } from 'react';
import { httpGetAllCategories } from '~/apiServices/categoryServices';

const SelectCategory = ({ currentValue, handleChange }) => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const getAllCategories = async () => {
      const response = await httpGetAllCategories();
      setCategories(response.data);
    };
    getAllCategories();
  }, []);
  return (
    <select
      name='category'
      value={currentValue || 'default'}
      onChange={handleChange}
      className='w-full p-2 border border-gray-400 rounded-sm mt-8 focus:border-yellow-300 focus:outline-none'
      required
    >
      <option value='default'>Chọn loại tin</option>
      {categories.map((category) => (
        <option key={category['_id']} value={category['_id']}>
          {category.name}
        </option>
      ))}
    </select>
  );
};

export default SelectCategory;
