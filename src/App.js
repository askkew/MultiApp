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

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import './App.css';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#f44336',
    },
    secondary: {
      main: '#00e676',
    },
  }
})

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#f44336',
    },
    secondary: {
      main: '#00e676',
    },
  }
})

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
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

    </ThemeProvider>
  );
}

export default App;
