import './App.css'
import { React, useState } from 'react'
import {FaTrashAlt} from 'react-icons/fa'
import Header from './Header'
import AddItem from './AddItem'
import SearchItem from './SearchItem'

function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppingList')))
  const [newItem, setNewItem] = useState('')
  const [search, setSearch] = useState('')


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
    addItem(newItem)
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
    <Header title={"To Do for Day!"}></Header>

    <AddItem
    newItem={newItem}
    setNewItem={setNewItem}
    handleSubmmition={handleSubmmition}
    ></AddItem>

<SearchItem
    search={search}
    setSearch={setSearch}
    
    ></SearchItem>

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
