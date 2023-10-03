import './App.css';
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom'
import Root from './components/Root';


function App() {
  return (
    <Router>
      <div className="app">
        <Routes >
          <Route path='/' element={<Root/>} />
        </Routes >
      </div>
    </Router>
  );
}

export default App;
