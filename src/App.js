import './App.css';
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';


function App() {
  return (
    <Router>
      <div className="app">
        <Header/>
        <Routes >
          <Route path='/' element={<Home/>} />
          <Route path='/Checkout' element={<Checkout/>} />
        </Routes >
      </div>
    </Router>
  );
}

export default App;
