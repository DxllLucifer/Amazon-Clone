import './App.css';
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom'
import Home from './components/Home';
import Checkout from './components/Checkout';
import Login from './components/Login';
import SignUp from './components/SignUp';


function App() {
  return (
    <Router>
      <div className="app">
        <Routes >
          <Route path='/' element={<Home/>} />
          <Route path='/Login' element={<Login/>} />
          <Route path='/Createaccount' element={<SignUp/>} />
          <Route path='/Checkout' element={<Checkout/>} />
        </Routes >
      </div>
    </Router>
  );
}

export default App;
