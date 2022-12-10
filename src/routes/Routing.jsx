import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { Header } from '../components/layouts/public/Header';
import { Home } from '../components/layouts/public/Home';
import { PublicLayout } from '../components/layouts/public/PublicLayout';

export const Routing = () => {
  return (
    <BrowserRouter>
        <Routes>
             <Route path='/' element={<PublicLayout/>}>
                <Route index element={<Home/>}/>    
                <Route path='home' element={<Home/>}/>    
            </Route>  
        </Routes>
    </BrowserRouter>
  )
}
