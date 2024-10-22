import { React, useState, useEffect } from 'react';
import './index.css';
import Home from './Components/Home';
import NewPost from './Components/NewPost';
import PostPage from './Components/PostPage';
import About from './Components/About';
import Missing from './Components/Missing';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { format } from 'date-fns' 
import Layout from './Components/Layout';
import api from './api/posts'

function App() {
  const [posts, setPosts] = useState([])
  const [search, setSearch] = useState('')
  const [searchResults, setSearchResults] = useState([])
  // const [, set] = useState('')
  const [postTitle, setPostTitle] = useState('')
  const [postBody, setPostBody] = useState('')
  const navigate = useNavigate()

  useEffect(()=>{
    const filteredResults = posts.filter(post=>
    ((post.body).toLowerCase()).includes(search.toLowerCase())
      ||  ((post.title).toLowerCase()).includes(search.toLowerCase())
  )

    setSearchResults(filteredResults.reverse())

  },[posts, search])

  const handleSubmit= (e) =>{
    e.preventDefault()
    const id = posts.length ? posts[posts.length-1].id + 1 : 1 ;
    const dateTime = format(new Date(), 'MMMM dd, yyyy pp')
    const newPost = {id, title:postTitle, dateTime, body: postBody}
    const allPosts =[...posts, newPost]
    setPosts(allPosts)
    setPostTitle('')
    setPostBody('')
    navigate('/')
  }
    
    const handleDelete = (id) =>{
    const postsList = posts.filter(post => post.id !== id);
    setPosts(postsList);
    navigate('/');
  }

  return (
    <>
      <Routes> {/* Change from Switch to Routes */}
      <Route path='/' element={<Layout
          search={search}
          setSearch={searchResults}
        />}>
        <Route index path='/' element={<Home posts={searchResults} />} /> 

        <Route index path='/post' element={<NewPost
        handleSubmit={handleSubmit}
        postTitle={postTitle}
        setPostTitle={setPostTitle}
        postBody={postBody}
        setPostBody={setPostBody}
        />} />
        
        <Route path='/post/:id' element={<PostPage posts={posts} handleDelete={handleDelete}/>} />
        
        <Route path='/about' element={<About />} />
        
        <Route path='/*' element={<Missing />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
