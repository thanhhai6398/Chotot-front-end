import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import useAuth from '~/hooks/useAuth';
import useLocalStorage from '~/hooks/useLocalStorage';
import { LOCAL_STORAGE_KEY } from '~/utils/Enum';

const Personal = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { removeValue } = useLocalStorage(LOCAL_STORAGE_KEY, {});
  const { setAuth } = useAuth();

  const handleLogout = () => {
    //removeValue();
    setAuth({});
    navigate('/');
  };

  return (
    <div className='mx-auto max-w-5xl lg:max-w-7xl lg:px-8 py-3 h-screen'>
      <button
        className='rounded w-32 h-10 px-5 pt-1 text-center text-lg text-white bg-red-500'
        onClick={handleLogout}
      >
        Đăng xuất
      </button>
    </div>
  );
};

export default Personal;
