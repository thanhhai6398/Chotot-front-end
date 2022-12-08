import { Link } from "react-router-dom";
import { useParams,useState,useEffect } from 'react-router-dom';
import { httpGetUserById } from "~/apiServices/userService";

const BiographicalPage = () => {
    
    const { id } = useParams();
    const [user, setUser] = useState({});
    useEffect(() => {
        const getUserById = async () => {
        const response = await httpGetUserById(id);
        console.log(response.data);
        setUser(response.data);
        };
        getUserById();
    }, [id]);

    return (
        <div>
            <Link to="/" className="text-xs mt-6">
                Chợ tốt - Trang cá nhân{user.username}
            </Link>

            <div className="border-b-2 border-slate-200 mb-12"></div>
            <div>{user.username}</div>
            <div>
                <Link to="">{user.fowllowing.length} đang theo dõi</Link>
            </div>
            <button> + Theo dõi</button>
            <Link to='/user/edit/id' className="">Chỉnh sửa</Link>
        </div>
    );
};

export default BiographicalPage;