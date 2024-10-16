import React from 'react'
function Header({title}) {
  return (
    <h1>{title}</h1>
  )
}
Header.defaultProps={
    title:"Tilte",
}
export default Header