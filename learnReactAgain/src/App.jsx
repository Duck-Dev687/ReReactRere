import { React, useState, useEffect } from 'react';
import './index.css';
import Header from './Components/Header';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import Home from './Components/Home';
import NewPost from './Components/NewPost';
import PostPage from './Components/PostPage';
import About from './Components/About';
import Missing from './Components/Missing';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Routes> {/* Change from Switch to Routes */}
        <Route path='/' element={<Home />} /> {/* Use 'element' instead of children */}
        <Route path='/post' element={<NewPost />} />
        <Route path='/post/:id' element={<PostPage />} />
        <Route path='/about' element={<About />} />
        <Route path='/*' element={<Missing />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
