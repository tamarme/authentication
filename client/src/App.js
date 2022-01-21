import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './features/home/Home';
import Login from './features/login/Login';
import Register from './features/register/Register';
import Header from './features/header/Header'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<Header />}>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
