import './App.css';
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom'
import Home from './components/Home';
import Checkout from './components/Checkout';
import Login from './components/Login';
import SignUp from './components/SignUp';
import  Payment  from './components/Payment';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import Order from './components/Order';
import AddProduct from './components/AddProduct'

const stripePromise = loadStripe('pk_test_51NzETXSAwEjeVFDPygMmEGp8KuNkcJymBL0eag9xl2QIm5XzymrZe2zdMMf56TxtEWtXNbSu7ZW5V9fgaaOknYdt00HLjKFqLv');

function App() {
 
  return (
    <Router>
      <div className="app">
        <Elements stripe={stripePromise}  > 
          <Routes >
          <Route path='/Login' element={<Login/>} />
          <Route path='/addproduct' element={<AddProduct/>} />
          <Route path='/Createaccount' element={<SignUp/>} />
          <Route path='/Checkout' element={<Checkout/>} />
          <Route path='/payment' element={<Payment/>} />
          <Route path='/Order' element={<Order/>} />
          <Route path='/' element={<Home/>} />
          </Routes >
        </Elements>
      </div>
    </Router>
  );
}

export default App;
