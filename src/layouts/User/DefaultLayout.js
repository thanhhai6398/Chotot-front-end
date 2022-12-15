import Footer from './commons/Footer';
import Header from './commons/Header';

const DefaultLayout = ({ children }) => {
  return (
    <div className='wrapper bg-gray-100'>
      <Header />
      <div className='content py-8 min-h-screen'>{children}</div>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
