import './App.css';
import { React, useState, useEffect } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import Header from './Header';
import AddItem from './AddItem';
import SearchItem from './SearchItem';

function App() {
  const API_URL = 'http://localhost:3500/items'


  const [items, setItems] = useState( [] );
  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');
  const [fetchError, setFetchError]= useState(null);
  const [isLoading, setIsLoading] = useState(true)

/*   

// run every time the component render
  useEffect(()=>{
    console.log("render")
  })

  // run every time the component load bo[]
  useEffect(()=>{
    console.log("load")
  }, [])

    // run every time the dependecies change
  useEffect(()=>{
    console.log("dependecy change")
  }, [items])
*/

  useEffect(()=>{
     
    const fetchItems=async()=>{
      try{
        const response = await fetch(API_URL)
        if(!response.ok) throw Error("Didn't receive expected data")
        const listItems = await response.json()
        console.log(listItems)
        setItems(listItems)
        setFetchError(null)
      } catch(err){
        setFetchError(err.message)
      }
    }

    setTimeout(()=>{
      fetchItems()
    }, 2000)

    // (async () => await fetchItems())()


  },[])
    

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setItems(listItems);
  };
  const handleSubmmition = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem('');
  };
  const handleCheck = (id) => {
    const listItems = items.map(item => item.id === id ? { ...item, checked: !item.checked } : item);
    setItems(listItems);
  };
  const handleDelete = (id) => {
    const listItems = items.filter((item) => id !== item.id);
    setItems(listItems);
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


<main>
    {fetchError ? (
        <p style={{color: "red"}}>{`Error: ${fetchError}`}</p>
    ) : (
        filteredItems.length ? (
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
        )
    )}
</main>


    </>
  );
}

export default App;
