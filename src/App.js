import React, { useContext } from 'react'
import "./style.scss";
import Register from './components/Register'
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import { AuthContext } from './context/AuthContext';
// import Login from './components/Login';
// import Home from './components/Home';

const App = () => {
  const {currentUser} = useContext(AuthContext);
  console.log(currentUser);
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/'>
        <Route index element={<Home/>}/>
        <Route path='login' element={<Login/>} />
        <Route path='register' element={<Register/>} />

      </Route>
    </Routes>
    </BrowserRouter>
    
  )
}

export default App