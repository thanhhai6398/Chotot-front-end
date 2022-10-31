import React from 'react'
import { useNavigate } from 'react-router-dom'
import side from '~/assets/login-img.jpg'

const Login = () => {
    const navigate = useNavigate();
    return (
        <section className="flex justify-between rounded-2xl bg-white max-w-3xl shadow-2xl py-8">
            <div className='sm:w-1/20 px-16'>
                <h2 className='text-2xl font-bold my-4'>Đăng nhập</h2>
                <p className='text-sm mb-4'>Chưa có tài khoản? <span onClick={() => navigate('/register')} className='cursor-pointer font-bold underline underline-offset-1 text-lg hover:text-primary'>Đăng ký</span></p>
                <form className='text-sm'>
                    <input className='w-full  rounded-xl p-2 mt-4 border border-gray-300 outline-none ' type='phone' name='phone' placeholder='Số điện thoại' required />
                    <input className='w-full rounded-xl p-2 mt-4 border outline-none  border-gray-300' type='password' name='password' placeholder='Mật khẩu' required />
                    <p className='text-gray mt-4 cursor-pointer hover:underline'>Quên mật khẩu?</p>
                    <button className='py-1  w-full mt-4 text-lg font-medium bg-primary text-white rounded-xl'>
                        Đăng nhập
                    </button>
                </form>
            </div>
            <div className='w-1/2 sm:block hidden'>
                <img src={side} alt='login-bg' className='object-cover' />
            </div>
        </section>
    )
}

export default Login