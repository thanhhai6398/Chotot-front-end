import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { publicRoute } from '~/routes';
import DefaultLayout from '~/layouts/User/DefaultLayout';
import {UserInfoForm} from './components/User/index';
import './App.css';


function App() {
  return (
    <div className='App'>
      {/* <Routes>
        {
          publicRoute.map((route, index) => {
            const Page = route.component;
            const Layout = route?.layout || DefaultLayout;
            return <Route key={index} path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              } />
          })
        }
      </Routes> */}
      <UserInfoForm/>
    </div>

  );
}

export default App;
