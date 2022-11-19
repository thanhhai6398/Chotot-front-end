import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='bg-gray-800 text-white  mx-auto max-w-5xl lg:max-w-7xl lg:px-8'>
        <div className="flex py-6  justify-between">
            <div className='w-2/5 px-2'>
                <div className="mb-5">
                        <h6 className="text-3xl text-primary cursor-pointer py-1">CHỢ ĐỒ CŨ</h6>
                        <h6 className="text-xs">Chợ cho mọi người</h6>
                </div>
                <div className="text-sm">
                    <div>CÔNG TY TNHH MERN VIETNAM | Mã Số Thuế: ABCXYZA | Văn Phòng: Tầng 5 Tòa Nhà Trung Tâm</div>
                    <div>Số 1 Võ Văn Ngân, Phường Linh Chiểu, TP. Thủ Đức, TP. HCM</div>
                </div>
                <div className='px-4'>

                </div>
            </div>
            <div className='w-1/5 px-2'>
                <div className='mb-2'> LIÊN KẾT</div>
                <ul className="font-light">
                    <li><Link to="">Youtube</Link></li>
                    <li><Link to="">Facebook</Link></li>
                    <li><Link to="">Instagram</Link></li>
                    <li><Link to="">Tiktok</Link></li>
                </ul>
            </div>
            <div className='w-1/5 px-2'>
                <div className='mb-2'>LIÊN HỆ</div>
                <ul className="font-light">
                    <li >E-mail: mern@gmail.com</li>
                    <li>Hotline: 0972358764</li>
                    <li>Địa chỉ: 484 Lê Văn Việt, Tăng Nhơn Phú A, TP.Thủ Đức, TP.HCM</li>
                </ul>
            </div>
            <div className='w-1/5 px-2'>
                <div className="mb-2">CHÍNH SÁCH</div>
                <ul className="font-light">
                    <li>Chính sách đổi trả</li>
                    <li>Chính sách bảo hành</li>
                    <li>Chính sách bảo mật</li>
                    <li>Các câu hỏi thường gặp</li>
                </ul>
            </div>
        </div>
        </div>
    )
}

export default Footer