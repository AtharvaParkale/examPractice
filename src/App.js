import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Journey from './components/Journey/Journey';
import Team from './components/Team/Team';
import Store from './components/Store/Store';

function App() {
  return (
    <>
    <Router>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route path='/journey' element={<Journey/>} />
          <Route path='/team' element={<Team/>} />
          <Route path='/store' element={<Store/>} />
          <Route  path='/contact' element={<Contact/>} />
        </Routes>
      </Router> 
    </>
  );
}

export default App;
