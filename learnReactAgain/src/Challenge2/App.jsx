import React, { useEffect, useState } from 'react';
import Form from './Form';

const App = () => {
const API_URL= "https://jsonplaceholder.typicode.com/"
const [reqType, setReqType] = useState('users');
const [items, setItems] = useState([]);


useEffect(()=>{

    const fetchItems= async()=>{
        try{
            const response = await fetch(`${API_URL}${reqType}`)
            const data = await response.json()
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

    </>
  )
};

export default App;

