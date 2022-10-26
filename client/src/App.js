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
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import UserSettingsPage from './pages/UserSettings';
import Lab from './components/lab/Lab';


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
  },
  {
    path: ":labId",
    element: <Lab />
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
          {/* <BrowserRouter>
            <Routes>
              <Route path='/' element={<Landing />} />
              <Route path='/register' element={<RegisterPage />} />
              <Route path='/login' element={<Login />} />
              <Route path='/dashboard' element={<DashboardPage />} />
              <Route path='/user-settings' element={<UserSettingsPage />} />
              <Route path='/:labId' element={<Lab />} />
            </Routes>
          </BrowserRouter> */}
          <ToastContainer />
        </UserContext.Provider>
      </div>
    </>
  );
}

export default App;
