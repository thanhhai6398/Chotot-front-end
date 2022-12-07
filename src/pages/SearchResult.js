import React from 'react';
import { useLocation } from 'react-router-dom';
import Posts from '~/components/Post/Posts';

const SearchResult = () => {
  const location = useLocation();
  const { result } = location.state;
  return (
    <div className='mx-auto max-w-5xl lg:max-w-7xl lg:px-8 py-3 px-2'>
      {result.length > 0 ? (
        <Posts title='Kết quả tìm kiếm' post={result} />
      ) : (
        'Không tìm thấy kết quả'
      )}
    </div>
  );
};

export default SearchResult;
