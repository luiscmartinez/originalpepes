import React from 'react'
import { Route, Link } from 'react-router-dom'
import Home from './Home'
const Navigation = () => {
  return (
    <div className='nav'>
      <div className='inner_nav'>
        <h2>
          <Link to='/'>HOME</Link>
        </h2>
        <h2>
          <Link to='/menu'>MENU</Link>
        </h2>
        <h2>
          <Link to='/catering'>CATERING</Link>
        </h2>
        <h2>
          <Link to='/about'>ABOUT</Link>
        </h2>
        <h2>
          <Link to='/contact'>CONTACT</Link>
        </h2>
      </div>
    </div>
  )
}

export default Navigation
