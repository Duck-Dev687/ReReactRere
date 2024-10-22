import React from 'react'

function NewPost({handleSubmit, postTitle, setPostTitle, postBody, setPostBody}) {
  return (
    <main className='NewPost'>
    <h2>New Post</h2>
    <form className='newPostForm' onSubmit={handleSubmit}>
      <label htmlFor="postTitle">Title:</label>
      <input 
      type="text"
      id='postTitle'
      required
      value={postTitle}
      onChange={(e)=>setPostTitle(e.target.value)}
      />

      <label htmlFor="postBody">Post:</label>
      <textarea 
      required
      value={postBody}
      onChange={(e)=> setPostBody(e.target.value)}
      id="postBody"></textarea>

      <button type="submit">Submit</button>
    </form>
  </main>
  )
}

export default NewPost