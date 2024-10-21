import React, { useEffect, useState } from 'react';
import Form from './Form';
import List from './List';
import Table from './Table';
import './style.css'

const App = () => {
const API_URL= "https://jsonplaceholder.typicode.com/"
const [reqType, setReqType] = useState('users');
const [items, setItems] = useState([]);


useEffect(()=>{

    const fetchItems= async()=>{
        try{
            const response = await fetch(`${API_URL}${reqType}`)
            const data = await response.json()
            console.log(data)
            setItems(data)
        } catch(err){
            console.log(err)
        }
    }

    fetchItems();

},[reqType])

  return (
    <>
    <Form reqType={reqType} setReqType={setReqType}/>

    {/* <List items={items}/> */}

    <Table items={items}/>
    </>
  )
};

export default App;

