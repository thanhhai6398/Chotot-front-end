import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { httpGetUserById, httpPutUserById } from '~/apiServices/userService';
import UserInfoForm from '~/components/Form/UserInfoForm';
import useAuth from '~/hooks/useAuth';

const EditUser =() =>{
    const { id } = useParams();
    const navigate = useNavigate();
    const usernameRef = useRef(null);
    const addressRef = useRef(null);
    const phoneRef = useRef(null);
    const passwordRef = useRef(null);
    const [user, setUser] = useState({});
    useEffect(() => {
        const getUserById = async () => {
            const response = await httpGetUserById(id);
            console.log(response.data);
            setUser(response.data);
        };
        getUserById();
    }, []);
    const submitHandler = async (e) =>  {
        e.preventDefault();
        const username = usernameRef.current.value;
        const address = addressRef.current.value;
        const phone = phoneRef.current.value;
		const password = passwordRef.current.value;
		

        try {
            await httpPutUserById(user._id,username,phone, address, password).then(
                () => {
                    navigate(`/personal/${user._id}`);
                },
                (error) => {
                    console.log(error);
                }
            );
        } catch (error) {
            console.log(error);
        }
		
    };
    return (
        <div>
            <Link to="/" className="text-xs mt-6">
                Chợ tốt - Trang cá nhân{user.username}
            </Link>
            <div className="font-bold text-2xl mt-4">Thông tin cá nhân</div>
            <div className="border-b-2 border-slate-200 mb-12"></div>
            <div className="flex flex-col items-center">
                <div className="text-lg font-bold mr-52">Họ và tên</div>
                <input 
                    className="border border-amber-400 rounded w-72 bg-gray-200 my-4"
                    ref={usernameRef}
                ></input>
                <div className="text-lg font-bold mr-44">Số điện thoại</div>
                <input 
                    className="border border-amber-400 rounded w-72 bg-gray-200 my-4"
                    ref={phoneRef} 
                ></input>
                <div className="text-lg font-bold mr-56">Địa chỉ</div>
                <input 
                    className="border border-amber-400 rounded w-72 bg-gray-200 my-4"
                    ref={addressRef}
                ></input>               
                <div className="text-lg font-bold mr-52">Mật khẩu</div>
                <input 
                    className="border border-amber-400 rounded w-72 bg-gray-200 my-4"
                    ref={passwordRef}
                ></input>
                <div>
                    <button
                    onClick={submitHandler}
                     className=" bg-amber-500 hover:bg-amber-400 rounded h-10 w-72 mt-6">
                        Lưu
                    </button>
                </div>
            </div>
        </div>
    );
}

export default EditUser