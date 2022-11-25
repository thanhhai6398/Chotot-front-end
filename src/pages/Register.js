import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { phoneValidation, passwordValidation } from '~/utils/validation';
import { register } from '~/apiServices/authServices';

const initValue = {
  username: '',
  password: '',
  confirmPassword: '',
  phone: '',
  address: '',
};
const Register = () => {
  const [user, setUser] = useState(initValue);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!phoneValidation(user.phone)) {
      setError('Số điện thoại hợp lệ!');
      return;
    }
    if (!user.password === user.confirmPassword) {
      setError('Mật khẩu không trùng khớp!');
      return;
    }
    if (!passwordValidation(user.password)) {
      setError('Mật khẩu không hợp lệ');
      return;
    }
    try {
      const newUser = {
        phone: user.phone,
        username: user.username,
        password: user.password,
        addredd: user.address,
      };
      const response = await register(newUser);
      setError('');
      setUser(initValue);
      response && navigate('/auth');
    } catch (error) {
      setError(error.response.data.errMsg);
    }
  };
  return (
    <section className='bg-white shadow-2xl rounded-2xl max-w-3xl px-16 py-8 text-center'>
      <h2 className='text-2xl font-bold mb-4'>Đăng ký</h2>
      <p className='text-sm mb-4'>
        Đã có tài khoản?{' '}
        <span
          onClick={() => navigate('/auth')}
          className='ml-1 font-bold text-lg hover:text-primary cursor-pointer'
        >
          Đăng nhập
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
          className='w-full rounded-xl p-2 mt-4 border  border-gray-300 outline-none '
          type='text'
          name='username'
          value={user.username}
          placeholder='Họ và tên'
          onChange={handleChange}
          required
        />
        <div className='flex mt-4'>
          <input
            className='w-1/2 mr-4 rounded-xl p-2 border border-gray-300 outline-none '
            type='password'
            name='password'
            value={user.password}
            placeholder='Mật khẩu'
            onChange={handleChange}
            required
          />
          <input
            className='w-1/2 rounded-xl p-2 border border-gray-300 outline-none '
            type='password'
            name='confirmPassword'
            value={user.confirmPassword}
            placeholder='Nhập lại mật khẩu'
            onChange={handleChange}
            required
          />
        </div>
        <textarea
          className='w-full h-16 min-h-max mt-4 px-2 py-1 border border-gray-300 outline-none'
          placeholder='Địa chỉ'
          name='address'
          value={user.address}
          onChange={handleChange}
          required
        ></textarea>
        <ul className='text-left text-xs font-light mt-2'>
          <li className='mb-1'>- Mật khẩu chứa ít nhất 6 ký tự</li>
          <li className='mb-1'>- Chứa ít nhất một chữ thường</li>
          <li className='mb-1'>- Chứa ít nhất một chữ hoa</li>
          <li>- Chứa ít nhất một chữ số</li>
        </ul>
        <button className='py-1  w-full mt-8 text-lg font-medium bg-primary text-white rounded-xl'>
          Đăng ký
        </button>
      </form>
    </section>
  );
};

export default Register;
