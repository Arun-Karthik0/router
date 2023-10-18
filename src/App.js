import React from 'react';
import { BrowserRouter,Route,Link, Routes } from 'react-router-dom';
import Menu from './Pages/Menu';
import Contact from './Pages/Contact';
import About from './Pages/About';
import './App.css';
const Navigation=()=>{
    return (
    <div className='container'>
        <p><b>PIZZA HUT</b></p>
        <hr></hr>
    <nav>
        <ul className='navi'>
            <li className='li2'><Link to='/menu'>MENU</Link></li>
            <li className='li2'><Link to='/contact'>CONTACT</Link></li>
            <li className='li2'><Link to='/about'>ABOUT</Link></li>
        </ul>
    </nav>
    </div>
    );
};
const App=()=>{
  return(
  <>
    <BrowserRouter>
      <div>
        <Navigation/>
        <Routes>
            <Route path='/menu' element={<Menu/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/about' element={<About/>} />

        </Routes>

      </div>
    </BrowserRouter>
    </>
  );
}
export default App;
