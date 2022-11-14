import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHome, AiOutlineDatabase, AiOutlineHeart,AiOutlineUser,AiOutlineKey } from "react-icons/ai";
const Header = () => {
  return (
    <div className='bg-amber-400 '>
      <div className='flex flex-row py-2'>
        <Link to="/" className ="font-roboto font-bold text-5xl text-white ml-72">Chợ Đồ Cũ</Link>
        <Link to = "/" className ="flex flex-row mt-3 ml-12 mr-9 text-2xl"><AiOutlineHome/> Trang chủ</Link>
        <Link to = "/" className ="flex flex-row mt-3 mx-9 text-2xl"><AiOutlineDatabase/>Quản lý tin</Link>
        <Link to = "/" className ="flex flex-row mt-3 mx-9 text-2xl"><AiOutlineHeart/>Tin theo dõi</Link>
      </div>
      <div className='flex flex-row py-2'>
        <input className='border-white rounded px-5 ml-96 w-80 h-10' placeholder=' Tìm kiếm sản phẩm'></input>
        <button className='bg-orange-500 rounded px-5 ml-1 w-14 h-10 align-middle'><AiOutlineKey/> </button>

        <Link to="" className='flex flex-row text-center ml-24 px-5 pt-1 text-lg'><AiOutlineUser/> Đăng nhập</Link>
        
        <Link to="" className='bg-orange-500 rounded w-32 h-10 px-5 pt-1 text-center text-lg'>Đăng tin</Link>
      </div>    
    </div>
  )
}

export default Header