import React from 'react'
import {FaPlus} from 'react-icons/fa'

function AddItem() {
  return (
    <form className='addForm'>
        <label htmlFor="addItem">Add Item</label>
        <input type="text" autoFocus placeholder='add item' required/>
        <button type="submit" aria-label='add item'>
            <FaPlus></FaPlus>
        </button>
    </form>
)
}

export default AddItem