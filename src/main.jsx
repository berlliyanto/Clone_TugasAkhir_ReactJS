import React from 'react'
import ReactDOM from 'react-dom/client'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'

import './index.css'
import './style/Element.css'
import './style/Fragment.css'
import './style/Layout.css'

import App from './App'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <LandingPage />,
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: '/login',
//     element: <LoginPage/>,
//     errorElement: <ErrorPage />
//   },
//   {
//     path: '/register',
//     element: <RegisterPage/>,
//     errorElement: <ErrorPage />
//   },
//   {
//     path: '/home',
//     element: <HomePage/>,
//     errorElement: <ErrorPage />
//   },
//   {
//     path: '*',
//     element: <ErrorPage />
//   }
// ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
