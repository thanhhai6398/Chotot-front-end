import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider, PostProvider } from './contexts';
import './index.css';
import App from '~/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <PostProvider>
          <Routes>
            <Route path='/*' element={<App />} />
          </Routes>
        </PostProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>
);
