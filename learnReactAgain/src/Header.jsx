import React from 'react'
import Footer from './Footer'
function Header({title}) {
  return (
    <h1>{title}</h1>
  )
}
Header.defaultProps={
    title:"Tilte",
}
export default Header