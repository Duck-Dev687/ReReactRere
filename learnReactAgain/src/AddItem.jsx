import React, { useRef } from 'react'
import {FaPlus} from 'react-icons/fa'

function AddItem({newItem, setNewItem, handleSubmmition}) {

    const inputRef= useRef()

  return (
    <form className='addForm'>
        <label htmlFor="addItem">Add Item</label>
        <input type="text" autoFocus 
        ref={inputRef}
        placeholder='add item' 
        required
        value={newItem}
        onChange={(e)=>setNewItem(e.target.value)}
        
        />
        <button type="submit" aria-label='add item'  
        onClick={(e) => {
            handleSubmmition(e);   // Call the first function
            inputRef.current.focus();  // Call the second function
  }}
        >
            <FaPlus></FaPlus>
        </button>
    </form>
)
}

export default AddItem