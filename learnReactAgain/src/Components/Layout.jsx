import React from 'react'
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';


function Layout({search, setSearch, width}) {
  return (
    <>
        <Header title="My Blog" width={width} />
        <Nav search={search} setSearch={setSearch}/>
        <Outlet></Outlet>
        <Footer></Footer>
    </>
  )
}

export default Layout