/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import RequireAuth from './components/RequireAuth';
import { publicRoute, userRoute, adminRoute } from '~/routes';
import useAuth from '~/hooks/useAuth';
import useLocalStorage from '~/hooks/useLocalStorage';
import DefaultLayout from '~/layouts/User/DefaultLayout';
import Missing from './pages/Missing';
import { ROLE, LOCAL_STORAGE_KEY } from '~/utils/Enum';
import './App.css';

function App() {
  const { auth, setAuth } = useAuth();
  const { storedValue } = useLocalStorage(LOCAL_STORAGE_KEY, {});
  useEffect(() => {
    if (!auth?.user && storedValue) {
      setAuth(storedValue);
    }
  }, []);
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
        <Route
          path='admin'
          element={<RequireAuth allowedRoles={[ROLE.ADMIN]} />}
        >
          {createRoute(adminRoute)}
        </Route>
        {/* catch all */}
        <Route path='*' element={<Missing />} />
      </Routes>
    </div>
  );
}

export default App;
