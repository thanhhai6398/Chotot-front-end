import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RequireAuth from './components/RequireAuth';
import { publicRoute, userRoute, adminRoute } from '~/routes';
import DefaultLayout from '~/layouts/User/DefaultLayout';
import Missing from './pages/Missing';
import { ROLE } from '~/utils/Enum';
import './App.css';

function App() {
  const createRoute = (routes) => {
    return routes.map((route, index) => {
      const Page = route.component;
      const Layout = route?.layout || DefaultLayout;
      return (
        <Route
          key={index}
          path={route.path}
          element={
            <Layout>
              <Page />
            </Layout>
          }
        />
      );
    });
  };
  return (
    <div className='App'>
      <Routes>
        {/*public route*/}
        {createRoute(publicRoute)}
        {/*USER  route*/}
        <Route element={<RequireAuth allowedRoles={[ROLE.USER, ROLE.ADMIN]} />}>
          {createRoute(userRoute)}
        </Route>
        {/*ADMIN  route*/}
        <Route element={<RequireAuth allowedRoles={[ROLE.ADMIN]} />}>
          {createRoute(adminRoute)}
        </Route>
        {/* catch all */}
        <Route path='*' element={<Missing />} />
      </Routes>
    </div>
  );
}

export default App;
