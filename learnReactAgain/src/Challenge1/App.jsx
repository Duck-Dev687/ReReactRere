import React, { useState } from 'react'
import './style.css'

function App() {
  const [color, setColor] = useState('')
//   let colorBox = document.getElementById('colorBox')

//   const searchColor = (color) =>{
//     style=`color: ${color}` ?  colorBox.style=`color: ${color}`  : colorBox.style=`color: white` 
//   }


// const filteredColor =(color)=>{
//     color === 
// }


    return (
    <>
    <main>
    <div 
    style={{background: color}}
    id='colorBox'
    >
        {color? <p>{color}</p>: <p>Empty Value</p>}
    </div>

    <input 
    type="text"
    placeholder='Add Color name'
    value={color}
    onChange={(e)=>setColor(e.target.value)}
    />
    </main>
    </>
  )
}

export default App