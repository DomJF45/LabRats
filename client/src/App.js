import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/nav/Nav';
import RegisterPage from './pages/Register';
import Landing from './pages/Landing';
import Login from './components/auth/Login';
import Dashboard from './components/dashboard/Dashboard';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link
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
    element: <Dashboard />
  },
])


function App() {
  return (
    <>

      <div className="App">
        {/* <Navigation /> */}
        {/* <RegisterContainer /> */}
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
