import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/nav/Nav';
import RegisterContainer from './components/auth/registerContainer';
import Landing from './pages/Landing';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <Navigation /> */}
      {/* <RegisterContainer /> */}
      <Landing />
    </div>
  );
}

export default App;
