import { React} from 'react';
import './index.css';
import Home from './Components/Home';
import NewPost from './Components/NewPost';
import PostPage from './Components/PostPage';
import About from './Components/About';
import Missing from './Components/Missing';
import Layout from './Components/Layout';
import EditPost from './Components/EditPost';
import { Routes, Route } from 'react-router-dom';
import {DataProvider} from './context/DataContext';

function App() {
  return (
    <>
  <DataProvider>
      <Routes>
      <Route path='/' element={<Layout 
        />}>
        <Route index path='/' element={
        <Home 
         />} /> 
        <Route index path='/post' element={<NewPost
        />} />
        <Route index path='/edit/:id' element={
        <EditPost
        />} />  
        <Route path='/post/:id' element={<PostPage/>} />
        <Route path='/about' element={<About />} />
        <Route path='/*' element={<Missing />} />
        </Route>
      </Routes>
  </DataProvider>
    </>
  );
}

export default App;
