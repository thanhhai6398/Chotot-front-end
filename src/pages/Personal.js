import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import useAuth from '~/hooks/useAuth';
import { logout } from '~/apiServices/authServices';
import { httpGetUserById } from '~/apiServices/userService';

const Personal = () => {
  const [user, setUser] = useState({});
  // const { id } = useParams();
  const id = '638379098dc88f4387596240';
  const navigate = useNavigate();
  const { auth, setAuth } = useAuth();
  const handleLogout = async () => {
    const res = await logout();
    setAuth({});
    navigate('/');
  };

  useEffect(() => {
    const getUserById = async () => {
      const res = await httpGetUserById(id);
      setUser(res.data);
    };
    getUserById();
  }, []);

  return (
    <div className='mx-auto max-w-5xl lg:max-w-7xl lg:px-8 py-3 h-screen'>
      <button
        className='rounded w-32 h-10 px-5 pt-1 text-center text-lg text-white bg-red-500'
        onClick={handleLogout}
      >
        Đăng xuất
      </button>

      {user._id === auth?.user._id ? (
        <button className='' onClick={() => alert('hello')}>
          Chỉnh sửa
        </button>
      ) : (
        <button> + Theo dõi</button>
      )}
    </div>
  );
};

export default Personal;
