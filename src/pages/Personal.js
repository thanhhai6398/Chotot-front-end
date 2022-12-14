import React from "react";
import { useNavigate,useParams, Link } from "react-router-dom";
import { useState,useEffect } from "react";
import useAuth from "~/hooks/useAuth";
import { logout } from "~/apiServices/authServices";
import { httpGetUserById } from "~/apiServices/userService";

const Personal = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { setAuth } = useAuth();
    const handleLogout = async () => {
        const res = await logout();
        setAuth({});
        navigate("/");
    };

    const handleEditPage = async (id) => {
        navigate(`/personal/edit/:${id}`);
    };

    const [user, setUser] = useState({});
    useEffect(() => {
      const getUserById = async () => {
        const response = await httpGetUserById(id);
        console.log(response.data);
        setUser(response.data);
      };
      getUserById();
    }, []);

    return (
        <div>
            <div className="mx-auto max-w-5xl lg:max-w-7xl lg:px-8 py-3 h-screen">
                <button
                    className="rounded w-32 h-10 px-5 pt-1 text-center text-lg text-white bg-red-500"
                    onClick={handleLogout}
                >
                    Đăng xuất
                </button>
                <div>
                    <Link to="/" className="text-xs mt-6">
                        Chợ tốt - Trang cá nhân{user.username}
                    </Link>

                    <div className="border-b-2 border-slate-200 mb-12"></div>
                    <div>{user.username}</div>
                    <div>
                        <Link to="">{} đang theo dõi</Link>
                    </div>
                    {user._id == localStorage.getItem("LOCAL_STORAGE_KEY")._id ? (
                        <button className="" onClick={handleEditPage(user._id)}>
                            Chỉnh sửa
                        </button>
                        
                        
                    ) : (
                        <button> + Theo dõi</button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Personal;
