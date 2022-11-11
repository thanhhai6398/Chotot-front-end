import { createContext, useState } from "react";

export const PostContext = createContext({});

const PostProvider = ({ children }) => {
    const initValue = {
        title: '',
        price: '',
        description: '',
        address: '',

        images: [],

        branchName: '',
        year: '',
        warranty: '',
        category: '',
        postedBy: ''
    }
    const [post, setPost] = useState(initValue);
    return (
        <PostContext.Provider value={[post, setPost]}>
            {children}
        </PostContext.Provider>
    )
}

export default PostProvider;