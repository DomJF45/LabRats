import React from 'react'
import RegisterPage from './pages/Register';
import Landing from './pages/Landing';
import Login from './pages/Login'
import DashboardPage from './pages/Dashboard';
import { ToastContainer } from 'react-toastify';
import { useSelector } from 'react-redux';

import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import UserSettingsPage from './pages/UserSettings';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/register",
    element: <RegisterPage />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/dashboard",
    element: <DashboardPage />
  },
  {
    path: "/user-settings",
    element: <UserSettingsPage />
  }
])


function App() {

  const { user } = useSelector((state) => state.auth);

  const UserContext = React.createContext({
    name: user ? user.name : null
  })

  return (
    <>

      <div className="App">
        {/* <Navigation /> */}
        {/* <RegisterContainer /> */}
        <UserContext.Provider>

          <RouterProvider router={router} />
          <ToastContainer />
        </UserContext.Provider>
      </div>
    </>
  );
}

export default App;
