import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import ReactLoading from "react-loading";
import * as request from '~/utils/request';
import { httpGetPostsSaved } from '~/apiServices/postService';
const PostItem = (props) => {
    const { post } = props;
    const [saveLoading, setSaveLoading] = useState(false);
    const [listPostsSaved, setListPostsSaved] = useState([]);
    useEffect(() => {
        const getPostsSaved = async () => {
            const response = await httpGetPostsSaved();
            console.log(response.postsSaved);
            setListPostsSaved(response.postsSaved);
        };
        getPostsSaved();
    }, []);
    const searchValue = (postId, array) => {
        let new_array = [];
        for (let i = 0; i < array.length; i++) {
            if (array[i]._id === postId || array[i] === postId) {
                new_array.push(array[i]);
            }
        }
        return new_array;
    }
    const save = async (postId, payload) => {
        setSaveLoading(true);
        try {
          const { newUser } = await request.patch(`/posts/savePost/${postId}`, payload);
          console.log(newUser.postsSaved);
          setListPostsSaved(newUser.postsSaved);
        } catch (error) {
          console.log(error);
        }
        setSaveLoading(false);
      };
      const unSave = async (postId, payload) => {
        setSaveLoading(true);
        try {
          const { newUser } = await request.patch(`/posts/unsavePost/${postId}`, payload);
          setListPostsSaved(newUser.postsSaved);
        } catch (error) {
          console.log(error);
        }
        setSaveLoading(false);
      };
    return (
        <div className="bg-white border border-gray-100 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative">

            <div>
                <Link to={`/posts/${post._id}`} ><img className="w-64 mx-auto transform transition duration-300 hover:scale-105" src={post.images[0]} alt="hinh" /></Link>
                <div >
                    {/* <button className="text-red-600" onClick={handleSave}>
                            <svg class="text-red-400 w-6 h-auto fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z" />
                            </svg>
                        </button> */}
                    {searchValue(post._id, listPostsSaved).length > 0 ? (
                        <button
                            className=' py-[6px] flex items-center justify-center gap-x-1 w-full rounded-sm hover:bg-[#e0e0e0] text-[#c22727] dark:hover:bg-[#3A3B3C] font-semibold text-[15px] dark:text-[#c22727] transition-50 cursor-pointer  '
                            onClick={() => unSave(post._id)}
                            disabled={saveLoading}>
                            {saveLoading ? (
                                <ReactLoading
                                    type='bubbles'
                                    width='14%'
                                    height='14%'
                                    color='#c22727'
                                />
                            ) : (
                                <>
                                    <AiFillHeart className='text-xl translate-y-[1px] text-[#c22727] ' />
                                    Lưu
                                </>
                            )}
                        </button>
                    ) : (
                        <button
                            className=' py-[6px] flex items-center justify-center gap-x-1 w-full rounded-sm hover:bg-[#e0e0e0] text-[#6A7583] dark:hover:bg-[#3A3B3C] font-semibold text-[15px] dark:text-[#b0b3b8] transition-50 cursor-pointer '
                            onClick={() => save(post._id)}
                            disabled={saveLoading}>
                            {saveLoading ? (
                                <ReactLoading
                                    type='bubbles'
                                    width='14%'
                                    height='14%'
                                    color='#6A7583'
                                />
                            ) : (
                                <>
                                    <AiOutlineHeart className='text-xl translate-y-[1px] ' />
                                    Lưu
                                </>
                            )}
                        </button>
                    )}
                </div>
            </div>
            <div className="flex flex-col items-center my-3 space-y-2">
                <div className="text-gray-900 poppins text-lg">
                    {post.title}
                </div>
                <div className="text-gray-900 poppins text-2xl font-bold">
                    ${post.price}
                </div>
                <div className="text-gray-900 poppins text-xl">
                    {post.address}
                </div>
            </div>

        </div>
    )
}

export default PostItem
