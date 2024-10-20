import './App.css'
import { React, useState } from 'react'
import {FaTrashAlt} from 'react-icons/fa'
import Header from './Header'
import AddItem from './AddItem'

function App() {
  const [items, setItems] = useState([
    {id:11 ,item: "item1", checked:true,},
    {id:22,item: "item2", checked:false,},
    {id:33,item: "item3", checked:true,},
  ])
  
  const [newItem, setNewItem] = useState('')

  const setAndSaveItems = (newItems)=>{
    setItems(newItems)
    localStorage.setItem('shoppingList', JSON.stringify(newItems))
  }


  const addItem = (item) =>{
    const id = items.length ? items[items.length-1].id + 1: 1
    const myNewItem = {id, checked:false, item}
    const listItems = [...items, myNewItem];
    setAndSaveItems(listItems)
  }

  const handleSubmmition = (e) =>{
    e.preventDefault();
    if(!newItem) return;
    setNewItem('')

  }

  const handleCheck = (id) =>{
    const listItems = items.map(item => item.id === id? {...item, checked: !item.checked} : item)
    setAndSaveItems(listItems)
  }
  
  const handleDelete=(id)=>{
    const listItems = items.filter((item)=>id !== item.id )
    setAndSaveItems(listItems)
  }

  return (
    <>
    <Header title={"sdfsdf"}></Header>
    <AddItem
    newItem={newItem}
    setNewItem={setNewItem}
    handleSubmmition={handleSubmmition}
    ></AddItem>

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
