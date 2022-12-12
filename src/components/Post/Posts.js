import PostItem from './PostItem';
function Posts(props) {
  return (
    <div className='bg-white'>
      <div className='mx-auto max-w-2xl pt-8 pb-16 px-4 sm:py-8 sm:px-6 lg:max-w-7xl lg:px-8'>
        <h2 className='text-left text-2xl font-bold tracking-tight text-gray-900'>
          {props.title || 'Tin dành cho bạn'}
        </h2>

        <div className='mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
          {props.post.length > 0
            ? props.post.map((post, index) => (
                <PostItem post={post} key={index}></PostItem>
              ))
            : 'Không có tin nào'}
        </div>
      </div>
    </div>
  );
}
export default Posts;
