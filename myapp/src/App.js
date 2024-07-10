import logo from './logo.svg';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes, Link, NavLink } from 'react-router-dom';

function App() {
  return (
    <div className="App">
          <Router>
            <div className="App">
                <Link to='/'></Link>

                <Routes>
                  <Route path="/" element={<Home />} />
                </Routes>
            </div>
          </Router>
    </div>
  );
}

export default App;
