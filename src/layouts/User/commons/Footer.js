import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='bg-amber-400  p-6'>
        <div className="bg-amber-400 flex  w-full  border-b-2 border-orange-800">
            <div className='flex-1 w-3/5 ml-12 my-5 '>
                <div className="flex flex-col">
                        <h6 className="text-3xl text-orange-700">CHỢ ĐỒ CŨ</h6>
                        <h6 className="text-xs">Chợ cho mọi người</h6>
                </div>
                <div className="text-xs mt-5">
                    <div>CÔNG TY TNHH MERN VIETNAM | Mã Số Thuế: ABCXYZA | Văn Phòng: Tầng 5 Tòa Nhà Trung Tâm</div>
                    <div>Số 1 Võ Văn Ngân, Phường Linh Chiểu, TP. Thủ Đức, TP. HCM</div>
                </div>
                <div className='px-4'>

                </div>
            </div>
            <div className='flex-1 w-1/5 ml-12 my-6'>
                <div className='mb-2 text-orange-600'> LIÊN KẾT</div>
                <div className="text-xs mt-3">
                    <div><Link to="">Youtube</Link></div>
                    <div><Link to="">Facebook</Link></div>
                    <div><Link to="">Instagram</Link></div>
                    <div><Link to="">Tiktok</Link></div>
                </div>
            </div>
            <div className='flex-1 w-1/5 my-6 '>
                <div className='mb-2 text-orange-600'>LIÊN HỆ</div>
                <div className="text-xs mt-3">
                    <div >E-mail: mern@gmail.com</div>
                    <div>Hotline: 0972358764</div>
                    <div>Địa chỉ: 484 Lê Văn Việt, Tăng Nhơn Phú A, TP.Thủ Đức, TP.HCM</div>
                </div>
            </div>
            <div className='flex-1 w-1/5 my-6 ml-10'>
                <div className='mb-2 text-orange-600'>CHÍNH SÁCH</div>
                <div className="text-xs mt-3">
                    <div>Chính sách đổi trả</div>
                    <div>Chính sách bảo hành</div>
                    <div>Chính sách bảo mật</div>
                    <div>Các câu hỏi thường gặp</div>
                </div>
            </div>
            
        </div>
        </div>
    )
}

export default Footer