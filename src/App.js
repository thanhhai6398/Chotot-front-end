import React, { Fragment } from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { publicRoute } from '~/routes';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Fragment>
          {
            publicRoute.map((route, index) => {
              const Page = route.component;
              const Layout = route?.layout || React.Fragment
              return <Route key={index} path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                } />
            })
          }
        </Fragment>
      </Routes>
    </Router>

  );
}

export default App;
