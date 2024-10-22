import React from 'react'
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

function Layout({search, setSearch}) {
  return (
    <>
        <Header title="My Blog" />
        <Nav search={search} setSearch={setSearch}/>
        <Outlet></Outlet>
        <Footer></Footer>
    </>
  )
}

export default Layout