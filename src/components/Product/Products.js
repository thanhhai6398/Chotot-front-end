import ProductItem from "./ProductItem";
function Products(props) {
    const products = [
        {
            id: 1,
            title: 'iPhone 13 Pro Max 256G VN - Zin chuẩn',
            image: 'https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-xanh-xa-1.jpg',
            price: '23.900.000',
            address: 'Phường 13, Quận 4, Tp Hồ Chí Minh',
        },
        {
            id: 2,
            title: 'iPhone 13 Pro Max 256G VN - Zin chuẩn',
            image: 'https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-xanh-xa-1.jpg',
            price: '23.900.000',
            address: 'Phường 13, Quận 4, Tp Hồ Chí Minh',
        },
        {
            id: 3,
            title: 'iPhone 13 Pro Max 256G VN - Zin chuẩn',
            image: 'https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-xanh-xa-1.jpg',
            price: '23.900.000',
            address: 'Phường 13, Quận 4, Tp Hồ Chí Minh',
        },
        {
            id: 4,
            title: 'iPhone 13 Pro Max 256G VN - Zin chuẩn',
            image: 'https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-xanh-xa-1.jpg',
            price: '23.900.000',
            address: 'Phường 13, Quận 4, Tp Hồ Chí Minh',
        },
        // More products...
    ]
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-left text-2xl font-bold tracking-tight text-gray-900">Tin đăng dành cho bạn</h2>

                <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {
                        products.map((product, index) => (
                            <ProductItem product={product} key={index}></ProductItem>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
export default Products