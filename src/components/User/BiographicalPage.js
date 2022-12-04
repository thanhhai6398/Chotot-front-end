import { Link } from "react-router-dom";

const BiographicalPage = () => {
    return (
        <div>
            <Link to="/" className="text-xs mt-6">
                Chợ tốt - Trang cá nhân{" "}
            </Link>

            <div className="border-b-2 border-slate-200 mb-12"></div>
            <div>Tên abcxyz</div>
            <div>
                <Link to="">2 người theo dõi</Link>
                <Link to="">1 đang theo dõi</Link>
            </div>
            <button> + Theo dõi</button>
            <div>
                <div> Tin đã đăng</div>
                <div>Load ra tất cả các bài đăng của người đó</div>
            </div>
        </div>
    );
};

export default BiographicalPage;
