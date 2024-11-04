import React from 'react'
import { Outlet } from 'react-router-dom'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'

const MainLayout = () => {
  return (
    <>
        <HeaderComponent/>
        <Outlet/>
        <FooterComponent/>
    </>
  )
}

export default MainLayout