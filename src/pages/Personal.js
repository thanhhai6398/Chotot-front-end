import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import useAuth from "~/hooks/useAuth";
import * as request from "~/utils/request";
import { logout } from "~/apiServices/authServices";
import { httpGetUserById } from "~/apiServices/userService";
import { httpGetFollowing } from "~/apiServices/postService";

const Personal = () => {
    const [user, setUser] = useState({});
    const { id } = useParams();
    //const id = '638379098dc88f4387596240';
    const navigate = useNavigate();
    const { setAuth, auth } = useAuth();
    const handleLogout = async () => {
        const res = await logout();
        setAuth({});
        navigate("/");
    };

    const handleEditPage = async (id) => {
        navigate(`/personal/edit/${id}`);
    };

    //const [user, setUser] = useState({});
    useEffect(() => {
        const getUserById = async () => {
            const response = await httpGetUserById(id);
            console.log(response.data);
            setUser(response.data);
        };
        getUserById();
    }, []);

    //Số lượng người dùng đang follow
    const [countFollowing, setCountFollowing] = useState([]);
    useEffect(() => {
        const getFollowing = async () => {
            const response = await httpGetFollowing(id);
            console.log(response.following);
            setCountFollowing(response.result);
        };
        getFollowing();
    }, []);

    //Danh sách người dùng mà Tài khoản đăng nhập đã follow
    const [listFollowing, setListFollowing] = useState([]);
    useEffect(() => {
        const getListFollowing = async () => {
            const response = await httpGetFollowing(auth.user?._id);
            console.log(response.following);
            setListFollowing(response.following);
        };
        getListFollowing();
    }, []);

    const searchValue = (userId, array) => {
        let new_array = [];
        for (let i = 0; i < array.length; i++) {
            if (array[i]._id === userId || array[i] === userId) {
                new_array.push(array[i]);
            }
        }
        return new_array;
    };

    const follow = async (userId, payload) => {
        try {
            const { newUser } = await request.patch(
                `/users/follow/${userId}`,
                payload
            );
            console.log(newUser.fowllowing);
            setListFollowing(newUser.fowllowing);
        } catch (error) {
            console.log(error);
        }
    };

    const unFollow = async (userId, payload) => {
        try {
            const { newUser } = await request.patch(
                `/users/unfollow/${userId}`,
                payload
            );
            setListFollowing(newUser.fowllowing);
        } catch (error) {
            console.log(error);
        }
    };
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
                        Chợ tốt - Trang cá nhân {user.username}
                    </Link>

                    <div className="border-b-2 border-slate-200 mb-12"></div>
                    <div>{user.username}</div>
                    <div>
                        <Link to={`/following/${user._id}`}>
                            {countFollowing} đang theo dõi
                        </Link>
                    </div>
                    <div>
                        {user?.phone === auth.user?.phone ? (
                            <button
                                className=""
                                onClick={() => handleEditPage(user?._id)}
                            >
                                Chỉnh sửa
                            </button>
                        ) : (
                            <div>
                                {searchValue(user._id, listFollowing).length >
                                0 ? (
                                    <button onClick={() => unFollow(user._id)}>
                                        {" "}
                                        Hủy theo dõi{" "}
                                    </button>
                                ) : (
                                    <button onClick={() => follow(user._id)}>
                                        {" "}
                                        Theo dõi{" "}
                                    </button>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Personal;
