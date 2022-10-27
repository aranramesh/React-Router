import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Navsec/home';
import Service from './service/service';
import Client from './client/client';
import{ BrowserRouter , Routes ,Route} from "react-router-dom"

function Routercomponents (){
  return<BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='service' element={<Service/>}></Route>
    <Route path='client' element={<Client/>}></Route>
   
    <Route></Route>
  </Routes>
  </BrowserRouter>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(< Routercomponents/>);


