import logo from './logo.svg';
import './App.css';
import Home from './home';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Create from './Create';
import Navbar from './Navbar';
import BlogDetails from './BlogDetails';
import NotFound from './Notfound';

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />
        <div className='content'>
          <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route exact path='/Create' element={<Create />}></Route>
            <Route exact path='/blogs/:id' element={<BlogDetails />}></Route>
            <Route exact path="*" element={<NotFound />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
