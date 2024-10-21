import {React, useState, useEffect} from 'react'
import './index.css'
import Header from './Components/Header'
import Nav from './Components/Nav'
import Footer from './Components/Footer'
import Home from './Components/Home'
import NewPost from './Components/NewPost'
import PostPage from './Components/PostPage'
import About from './Components/About'
import Missing from './Components/Missing'
// import {Route, Switch, useHistory} from 'react-router-dom'

function App() {
  return (
    <>
      <Header></Header>
      <Nav></Nav>
      <Home></Home>
      <NewPost></NewPost>
      <PostPage></PostPage>
      <About></About>
      <Missing></Missing>
      <Footer></Footer>
    </>
  )
}

export default App