import './App.css';
import { React, useState, useEffect } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import Header from './Header';
import AddItem from './AddItem';
import SearchItem from './SearchItem';

function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppingList')) || []);
  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');

/*   

// run every time the component render
  useEffect(()=>{
    console.log("render")
  })

  // run every time the component load bo[]
  useEffect(()=>{
    console.log("load")
  }, [])
  
*/

  console.log("before useEffect")
  // run every time the dependecies change
  useEffect(()=>{
    console.log("inside useEffect")
    }, [items])
    
  console.log("after useEffect")


  const setAndSaveItems = (newItems) => {
    setItems(newItems);
    localStorage.setItem('shoppingList', JSON.stringify(newItems));
  };
  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setAndSaveItems(listItems);
  };
  const handleSubmmition = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem('');
  };
  const handleCheck = (id) => {
    const listItems = items.map(item => item.id === id ? { ...item, checked: !item.checked } : item);
    setAndSaveItems(listItems);
  };
  const handleDelete = (id) => {
    const listItems = items.filter((item) => id !== item.id);
    setAndSaveItems(listItems);
  };
  const filteredItems = items.filter((item) => 
    item.item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Header title={"To Do for Day!"} />

      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmmition={handleSubmmition}
      />

      <SearchItem
        search={search}
        setSearch={setSearch}
      />

      {filteredItems.length ? (
        <ul>
          {filteredItems.map((item) => (
            <li className='item' key={item.id}>
              <input
                type='checkbox'
                checked={item.checked}
                onChange={() => handleCheck(item.id)}
              />
              <label
                style={item.checked ? { textDecoration: 'line-through' } : null}
                onDoubleClick={() => handleCheck(item.id)}
              >
                {item.item}
              </label>
              <FaTrashAlt
                onClick={() => handleDelete(item.id)}
                role="button"
                tabIndex="0"
              />
            </li>
          ))}
        </ul>
      ) : (
        <p>No items found</p>
      )}
    </>
  );
}

export default App;
