import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import PostProvider from '~/contexts/PostProvider'
import './index.css'
import App from '~/App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <PostProvider>
      <Router>
        <App />
      </Router>
    </PostProvider>
  </React.StrictMode>
)
