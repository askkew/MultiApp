import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { About } from './components/about';
import { Home } from './components/home';
import Navbar from './components/Navbar';
import { Signup } from './components/signup';
import { Todo } from './components/todo';
import { Weather } from './components/weather';
import { Signin } from './components/signin';

import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/todo' element={<Todo />} />
        <Route path='/weather' element={<Weather />} />\
        <Route path='/sign-up' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />
      </Routes>
    </Router>
  );
}

export default App;
