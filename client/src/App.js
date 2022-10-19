
import RegisterPage from './pages/Register';
import Landing from './pages/Landing';
import Login from './pages/Login'
import DashboardPage from './pages/Dashboard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"


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
])


function App() {


  return (
    <>

      <div className="App">
        {/* <Navigation /> */}
        {/* <RegisterContainer /> */}
        <RouterProvider router={router} />
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
