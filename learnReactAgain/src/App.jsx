import './App.css'
import { React, useState } from 'react'

function App() {
  const [items, setItems] = useState([
    {id:1,item: "item1"},
    {id:2,item: "item2"},
    {id:3,item: "item3"},
  ])
  
  
  return (
    <>
      <ul>
        {items.map((item)=>(
          <li className='item'>
            <input type={item.item} key={item.id} />
            <label htmlFor="item.item"></label>
            <button>Delete</button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
