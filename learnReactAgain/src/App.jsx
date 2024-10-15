import reactLogo from './assets/react.svg'
import './App.css'
import { useState } from 'react'

function App() {
  const [items, setItems] = useState([
    {id:1,item: "item1"},
    {id:2,item: "item2"},
    {id:3,item: "item3"},
  ])
  
  
  return (
    <>
      <ul>
        {items.map((item)=()=>(
          <li className='item'>
            <input type={item.item} name={item.item} id={id} />
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
