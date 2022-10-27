import React from 'react'
import { Link } from 'react-router-dom'
import "./home.css"

function Home() {
  return (
    <div className='nav-sec'>
      <div className='flex'>
        <ul>
          <li>Home</li>
          <li> <Link to={"service"}> services</Link> </li>
          <li> <Link to={"client"}> Client</Link> </li>
          <button>Click me</button>
        </ul>
      </div>
    </div>
  )
}

export default Home