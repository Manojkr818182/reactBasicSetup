import React from 'react'
import Header from './header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './footer/Footer'
import stylesheet from './layout.module.css';

const Layout = () => {
  return (
    <div className={stylesheet.container}>
      <Header />
      <main className={stylesheet.content}>
        <Outlet />
      </main>
      <div className={stylesheet.footer}>
        <Footer />
      </div>
    </div>
  )
}

export default Layout