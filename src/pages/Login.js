import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '~/hooks/useAuth';
import { auth } from '~/apiServices/authServices';
import side from '~/assets/login-img.jpg';
const initValue = { phone: '', password: '' };
const Login = () => {
  const navigate = useNavigate();
  const { setAuth } = useAuth();
  const [user, setUser] = useState(initValue);
  const [error, setError] = useState('');
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await auth(user);
      const userLogged = response.user;
      const accessToken = response?.accessToken;
      setAuth({ user: userLogged, accessToken });
      setUser(initValue);
      setError('');
      navigate('/');
    } catch (error) {
      setError(error.response.data.errMsg);
    }
  };
  return (
    <section className='flex justify-between rounded-2xl bg-white max-w-3xl shadow-2xl py-8'>
      <div className='sm:w-1/20 px-16 text-center'>
        <h2 className='text-2xl font-bold my-4'>Đăng nhập</h2>
        <p className='text-sm mb-4'>
          Chưa có tài khoản?{' '}
          <span
            onClick={() => navigate('/register')}
            className='cursor-pointer ml-1 font-bold text-lg hover:text-primary'
          >
            Đăng ký
          </span>
        </p>
        {<p className='text-sm text-red-500'>{error}</p>}
        <form className='text-sm' onSubmit={handleSubmit}>
          <input
            className='w-full  rounded-xl p-2 mt-4 border border-gray-300 outline-none '
            type='phone'
            name='phone'
            value={user.phone}
            placeholder='Số điện thoại'
            onChange={handleChange}
            required
          />
          <input
            className='w-full rounded-xl p-2 mt-4 border outline-none  border-gray-300'
            type='password'
            name='password'
            placeholder='Mật khẩu'
            value={user.password}
            onChange={handleChange}
            required
          />
          <p className='text-gray mt-4 cursor-pointer hover:underline'>
            Quên mật khẩu?
          </p>
          <button className='py-1  w-full mt-4 text-lg font-medium bg-primary text-white rounded-xl'>
            Đăng nhập
          </button>
        </form>
      </div>
      <div className='w-1/2 sm:block hidden'>
        <img src={side} alt='login-bg' className='object-cover' />
      </div>
    </section>
  );
};

export default Login;
