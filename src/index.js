import ReactDOM from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './index.css';
import Adopcion from './pages/adopcion';
import Aliados from './pages/Aliados';
import Blog from './pages/Blog';
import Donacion from './pages/Donacion';
import Home from './pages/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/adopcion' element={<Adopcion />}></Route>
      <Route path='/donacion' element={<Donacion />}></Route>
      <Route path='/blog' element={<Blog />}></Route>
      <Route path='/aliados' element={<Aliados />}></Route>      
      
      <Route path='/home' element={<Navigate to={"/"} />}></Route>
    </Routes>
  </BrowserRouter>
);

