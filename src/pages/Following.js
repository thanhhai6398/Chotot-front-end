import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { httpGetFollowing } from "~/apiServices/postService";
import * as request from '~/utils/request';
const following = [
    {
        _id: '1',
        username: 'Thanh Nhi',
    },
    {
        _id: '2',
        username: 'Thanh Hai',
    }
]
function Following() {
    const { id } = useParams();
    const [listFollowing, setListFollowing] = useState([]);
    const getFollowing = async () => {
        const response = await httpGetFollowing(id);
        console.log(response.following);
        setListFollowing(response.following);
    };
    useEffect(() => {
        getFollowing();
    }, []);

    const unFollow = async (userId, payload) => {
        try {
            const { newUser } = await request.patch(`/users/unfollow/${userId}`, payload);
            getFollowing();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Đang theo dõi</h1>
                <div className="grid grid-cols-1 gap-y-10">
                    {listFollowing.length > 0 ? (
                        <div>
                            {
                                listFollowing.map((user, index) => (
                                    <div className="flex py-4">
                                        <div className="overflow-hidden relative w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600">
                                            <svg class="absolute -left-1 w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                                        </div>

                                        <div className="ml-4 mt-2 flex flex-1 flex-col">
                                            <div className="flex justify-between">
                                                <p className="text-black-600 text-l">{user.username}</p>

                                                <div className="flex">
                                                    <button type="button" onClick={() => unFollow(user._id)} className="font-medium text-indigo-600 hover:text-indigo-500">Bỏ theo dõi</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    ) : (
                        <div className=' w-full text-center my-5  '>
                            User is not following anyone!
                        </div>
                    )}
                    {/* {
                        following.map((user, index) => (
                            // <div className="flex items-center justify-between ">
                            //     <div className="flex justify-start items-center">
                            //         <div className="overflow-hidden relative w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600">
                            //             <svg class="absolute -left-1 w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                            //         </div>
                            //         <div className="px-3">
                            //             <p className="text-black-600 text-xl">{user.username}</p>
                            //         </div>
                            //     </div>
                            //     <button type="button" className="text-lg font-medium text-indigo-600 hover:text-indigo-500">
                            //         Bỏ theo dõi
                            //     </button>
                            // </div>
                            // <div className="flex py-4">
                            //     <div className="overflow-hidden relative w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600">
                            //         <svg class="absolute -left-1 w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                            //     </div>

                            //     <div className="ml-4 mt-2 flex flex-1 flex-col">
                            //         <div className="flex justify-between">
                            //             <p className="text-black-600 text-l">{user.username}</p>

                            //             <div className="flex">
                            //                 <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">Bỏ theo dõi</button>
                            //             </div>
                            //         </div>
                            //     </div>
                            // </div>
                        ))
                    } */}
                </div>
            </div>
        </div>
    )
}
export default Following