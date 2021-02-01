import React from 'react'

function Navbar() {
  return (
    <div>
      <p>hello there</p>

      {
      this.props.isLoading ?

      <p>welcome</p> :

      <p>Good bye</p>
      
      }


    </div>
  )
}

export default Navbar;
