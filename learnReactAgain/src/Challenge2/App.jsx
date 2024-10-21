import {React, useState, useEffect} from 'react'
import apiRequest2 from './apiRequest2'

function App() {
    const API_URL_POSTS= "http://localhost:3500/posts"
    const API_URL_COMMENTS= "http://localhost:3500/comments"
    const API_URL_USERS= "http://localhost:3500/users"

    const [items, setItems] = useState( [] );
    const [fetchError, setFetchError]= useState(null);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
     
        const fetchItems= async ()=>{
          try{
            const response = await fetch(API_URL)
            if(!response.ok) throw Error("Didn't receive expected data")
            const listItems = await response.json()
            setItems(listItems)
            setFetchError(null)
          } catch(err){
            setFetchError(err.message)
          } finally{
            setIsLoading(false)
          }
        }
        setTimeout(()=>{
          (async () => await fetchItems())()
        }, 2000)
      },[])
        

  return (
    <>
        <header>
            <button onClick={()=>handleUsers}>Users</button>
            <button onClick={()=>handlePosts}>Posts</button>
            <button onClick={()=>handleComments}>Comments</button>
        </header>

        <main>
            {!fetchError && isLoading? <p>Loading Items...</p> :
            
            <ul>{}</ul>

            }
        </main>
    </>
  )
}

export default App