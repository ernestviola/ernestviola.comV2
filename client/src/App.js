import './styles/App.css';
import React from 'react';
import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";

import Home from './components/routes/home/Home';
import NotFound from './components/routes/notfound/NotFound'
import Projects from './components/routes/project/Projects';

import Blogs from './components/routes/blog/Blogs';
import Createblog from './components/routes/blog/Create';
import Readblog from './components/routes/blog/Read'
import Updateblog from './components/routes/blog/Update';

import Login from './components/routes/authorization/Login'
import Logout from './components/routes/authorization/Logout'

import ResponsiveAppBar from './components/customComponents/navbar/ResponsiveAppBar';
import Footer from './components/customComponents/footer/Footer';

function App() {
  return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>} />
            
            <Route path='/blogs' element={<Blogs/>} />
            <Route path='/blog/create' element={<Createblog/>} />
            <Route path='/blog/:uuid' element={<Readblog/>} />
            <Route path='/blog/update/:uuid' element={<Updateblog/>} />

            <Route path='/projects' element={<Projects/>} />
            
            <Route path='/login' element={<Login/>} />
            <Route path='/logout' element={<Logout/>} />
            

            <Route path ='*' element={<NotFound/>} />
          </Routes>
        </BrowserRouter>
      </div>

  );
}

export default App;
