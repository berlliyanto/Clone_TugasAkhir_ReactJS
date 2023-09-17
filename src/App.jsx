import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/404";
import AccountPage from "./pages/AccountPage";
import ProfilePage from './pages/ProfilePage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <LandingPage />,
        errorElement: <ErrorPage />,
    },
    {
        path: '/login',
        element: <LoginPage />,
        errorElement: <ErrorPage />
    },
    {
        path: '/register',
        element: <RegisterPage />,
        errorElement: <ErrorPage />
    },
    {
        path: '/home',
        element: <HomePage />,
        errorElement: <ErrorPage />
    },
    {
        path: '/account',
        element: <AccountPage />,
    },
    {
        path: '/profile/:id',
        element: <ProfilePage />,
        errorElement: <ErrorPage />
    },
    {
        path: '*',
        element: <ErrorPage />
    }
])

function App() {
    return (
        <RouterProvider router={router} />
    )
}

export default App;