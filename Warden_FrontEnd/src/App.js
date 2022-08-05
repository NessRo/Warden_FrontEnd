
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Navbar from './components/Navbar';
import Admin from './pages/Admin';
import Home from './pages/home';
import OnBoarding from './pages/Onboarding';
import './App.css';


function App() {
  return (
    <Router>
    <>
        <Navbar>
          <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route exact path='/OnBoarding' element={OnBoarding}></Route>
            <Route exact path='/Admin' element={Admin}></Route>
          </Routes>
        </Navbar>
    
    
    </>
    </Router>
  );
}

export default App;
