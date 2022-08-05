
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Navbar from './components/NavBar/Navbar';
import Admin from './pages/Admin/Admin';
import Home from './pages/home';
import OnBoarding from './pages/Onboarding';
import './App.css';
import QuestionaireTemplates from './components/Admin/QuestionaireTemplates/QuestionaireTemplates';


function App() {
  return (
    <Router>
    <>
        <Navbar></Navbar>
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/OnBoarding' element={<OnBoarding />}></Route>
        <Route exact path='/Admin' element={<Admin />}></Route>
        <Route exact path='/Questionaire-Templates' element={<QuestionaireTemplates />}></Route>
      </Routes>
    
    </>
    </Router>
  );
}

export default App;
