import {FaLaptop, FaTabletAlt, FaMobileAlt} from "react-icons/fa"
import React, { useContext } from 'react'
import DataContext from '../context/DataContext'

function Header({title}) {
  const {width}= useContext(DataContext)
  return (
    <>
      <header className='header' >
        <h1>{title}</h1>
        {width <= 768 ? (<FaMobileAlt />)
          : width <= 992 ? (<FaTabletAlt/>)
          : (<FaLaptop/>)
        }
      </header>
    </>
  )
}

export default Header