import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/404";
import AccountPage from "./pages/AccountPage";
import ProfilePage from './pages/ProfilePage';
import MachinePage1 from './pages/machine/Machine1';
import MachinePage2 from './pages/machine/Machine2';
import MachinePage3 from './pages/machine/Machine3';
import MachinePage4 from './pages/machine/Machine4';

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
        errorElement: <ErrorPage />
    },
    {
        path: '/profile/:id',
        element: <ProfilePage />,
        errorElement: <ErrorPage />
    },
    {
        path: '/machine1',
        element: <MachinePage1 />,
        errorElement: <ErrorPage />
    },
    {
        path: '/machine2',
        element: <MachinePage2 />,
        errorElement: <ErrorPage />
    },
    {
        path: '/machine3',
        element: <MachinePage3 />,
        errorElement: <ErrorPage />
    },
    {
        path: '/machine4',
        element: <MachinePage4 />,
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