import React from 'react'
import { Link } from 'react-router-dom'
import {
  AiOutlineHome,
  AiOutlineDatabase,
  AiOutlineHeart,
  AiOutlineUser,
  AiOutlineSearch,
} from 'react-icons/ai'
const Header = () => {
  const NAV_LINKS = [
    {
      text: 'Trang chủ',
      icon: <AiOutlineHome />,
      path: '/',
    },
    {
      text: 'Quản lý tin',
      icon: <AiOutlineDatabase />,
      path: '/',
    },
    {
      text: 'Tin theo dõi',
      icon: <AiOutlineHeart />,
      path: '/',
    },
  ]
  const handleNavLinks = () => {
    return NAV_LINKS.map((link, index) => {
      return (
        <li key={index}>
          <Link to={link.path} className="flex flex-row items-center text-lg">
            <span className="text-2xl mr-2">{link.icon}</span>
            {link.text}
          </Link>
        </li>
      )
    })
  }
  return (
    <div className="bg-amber-400 mx-auto max-w-5xl lg:max-w-7xl lg:px-8 py-3">
      <div className="flex">
        <Link
          to="/"
          className="font-roboto font-bold text-4xl mr-16 text-white"
        >
          Chợ Đồ Cũ
        </Link>
        <ul className="flex flex-row py-2 gap-10">{handleNavLinks()}</ul>
      </div>
      <div className="flex flex-row justify-between mt-2">
        <input
          className="border-white rounded px-5 w-80 h-10 flex-1 border-none outline-none focus:outline-none"
          placeholder=" Tìm kiếm sản phẩm"
        ></input>
        <button className="bg-orange-500 rounded px-5 ml-1 w-14 h-10 text-center align-middle">
          <AiOutlineSearch className="text-2xl text-white" />{' '}
        </button>
        <Link
          to=""
          className="flex flex-row items-center text-center ml-24 px-5 text-lg"
        >
          <AiOutlineUser className="mr-3 text-2xl" /> Đăng nhập
        </Link>

        <Link
          to=""
          className="bg-orange-500 rounded w-32 h-10 px-5 pt-1 text-center text-lg"
        >
          Đăng tin
        </Link>
      </div>
    </div>
  )
}

export default Header
