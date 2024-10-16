import './App.css'
import { React, useState } from 'react'
import {FaTrashAlt} from 'react-icons/fa'

function App() {
  const [items, setItems] = useState([
    {id:11,item: "item1", checked:true,},
    {id:22,item: "item2", checked:false,},
    {id:33,item: "item3", checked:true,},
  ])
  
  const handleCheck = (id) =>{
    const listItems = items.map(item => item.id === id? {...item, checked: !item.checked} : item)

    setItems(listItems)

    localStorage.setItem('shoppingList', JSON.stringify(listItems))
  }
  
  const handleDelete=(id)=>{
    const listItems = items.filter((item)=>id !== item.id )

    setItems(listItems)
  }

  return (
    <>
    {items.length? 
      <ul>
      {items.map((item)=>(
        <li className='item'>
          <input
          onChange={()=>handleCheck(item.id)}
          type='checkbox' checked={item.checked} key={item.id} />
        
          <label 
          style={(item.checked)? {textDecoration:'line-through'}:null}
          onDoubleClick={()=>handleCheck(item.id)} >{item.item}</label>
          <FaTrashAlt 
          onClick={()=>handleDelete(item.id)}
          role="button" tabIndex="0"></FaTrashAlt>
        </li>
      ))}
    </ul>     
     : <p>list is empty</p> 
  }

    </>
  )
}

export default App
