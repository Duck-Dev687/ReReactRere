import './App.css';
import { React, useState, useEffect } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import Header from './Header';
import AddItem from './AddItem';
import SearchItem from './SearchItem';
import apiRequest from './apiRequest';

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
        setItems(listItems)
        setFetchError(null)
      } catch(err){
        setFetchError(err.message)
      } finally{
        setIsLoading(false)
      }
    }

    setTimeout(()=>{
      (async () => await fetchItems())()
    }, 2000)



  },[])
    

  const addItem = async (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setItems(listItems);

    const postOptions ={
      method:'POST', 
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify(myNewItem)
    }

    const result = await apiRequest(API_URL, postOptions) 
    if(result) setFetchError(result)
  };
  const handleSubmmition = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem('');
  };


  const handleCheck = async (id) => {
    const listItems = items.map(item => item.id === id ? { ...item, checked: !item.checked } : item);
    setItems(listItems);

    const myItem = listItems.filter((item)=>item.id === id)
    const updateOptions = {
      method:'PATCH',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify({checked: myItem[0].checked})
    };
    const reqUrl = `${API_URL}/${id}`
    const result = await apiRequest(reqUrl, updateOptions)
    if(result) setFetchError(result)
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
    {isLoading && <p>Loading Items...</p>}

    {!isLoading && fetchError ? (
        <p style={{ color: "red" }}>{`Error: ${fetchError}`}</p>
    ) : (
        !isLoading && (filteredItems.length ? (
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
        ))
    )}
</main>



    </>
  );
}

export default App;
