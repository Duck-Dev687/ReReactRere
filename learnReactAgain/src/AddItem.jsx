import React from 'react'
import {FaPlus} from 'react-icons/fa'

function AddItem({newItem, setNewItem, handleSubmmition}) {
  return (
    <form className='addForm'>
        <label htmlFor="addItem">Add Item</label>
        <input type="text" autoFocus 
        placeholder='add item' 
        required
        value={newItem}
        onChange={(e)=>setNewItem(e.target.value)}
        
        />
        <button type="submit" aria-label='add item' onClick={handleSubmmition}>
            <FaPlus></FaPlus>
        </button>
    </form>
)
}

export default AddItem