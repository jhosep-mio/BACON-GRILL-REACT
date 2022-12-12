import React from 'react'
import { Header } from './Header'
import {Outlet} from 'react-router-dom';
import { Footer } from './Footer';
import { Offer } from './Home/Offer';

export const PublicLayout = () => {
  return (
    <>
    {/* HEADER DEL APP */}
      <Header/>
    
    {/* CONTENIDO PRINCIPAL */}
      <Outlet/>

      <Footer/>

    </>

  )
}
