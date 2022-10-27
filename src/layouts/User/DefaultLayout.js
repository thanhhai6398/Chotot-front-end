import React from 'react'
import Footer from './commons/Footer'
import Header from './commons/Header'

const DefaultLayout = ({ children }) => {
  return (
    <div className='wrapper'>
      <Header />
      <div className='content'>{children}</div>
      <Footer />
    </div>
  )
}

export default DefaultLayout;