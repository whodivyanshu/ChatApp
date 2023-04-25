import React from 'react'

const Navbar = () => {
  return (
   <div className="navbar">
    <span className="logo">Lama Chat</span>
    <div className="user">
      <img src="https://images.pexels.com/photos/14737308/pexels-photo-14737308.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
      <span>Divyanshu</span>
      <button>logout</button>
    </div>
   </div>
  )
}

export default Navbar