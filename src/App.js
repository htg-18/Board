import logo from './logo.svg';
import './App.css';
import Signin from './components/auth/Signin';
import Signup from './components/auth/Signup';
import AuthDetails from './components/auth/AuthDetails';

function App() {
  return (
    <div className="App">
      {/* <Signin/>
      <Signup/> */}
      <AuthDetails/>
      {/* <Signup/> */}
    </div>
  );
}

export default App;
