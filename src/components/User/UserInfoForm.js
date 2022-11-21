import { Link } from "react-router-dom";

const UserInfoForm = () => {
    return(
        <div>
            <Link to="/" className="text-xs mt-6" >Chợ tốt - Trang cá nhân </Link>
            <div className="font-bold text-2xl mt-4">Thông tin cá nhân</div>
            <div className="border-b-2 border-slate-200 mb-12"></div>
            <div className="flex flex-col items-center">
            <div className="text-lg font-bold mr-52">Họ và tên</div>
            <input className="border border-amber-400 rounded w-72 bg-gray-200 my-4"></input>
            <div className="text-lg font-bold mr-44">Số điện thoại</div>
            <input className="border border-amber-400 rounded w-72 bg-gray-200 my-4"></input>
            <div className="text-lg font-bold mr-56">Địa chỉ</div>
            <input className="border border-amber-400 rounded w-72 bg-gray-200 my-4"></input>
            <div className="text-lg font-bold mr-60">Email</div>
            <input className="border border-amber-400 rounded w-72 bg-gray-200 my-4"></input>
            <div className="text-lg font-bold mr-52">Mật khẩu</div>
            <input className="border border-amber-400 rounded w-72 bg-gray-200 my-4"></input>
            <div><button className=" bg-amber-500 hover:bg-amber-400 rounded h-10 w-72 mt-6">Lưu</button></div>
            </div>
        </div>
    );
}

export default UserInfoForm;