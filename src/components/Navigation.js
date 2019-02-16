import React from 'react'
import { Route, Link } from 'react-router-dom'
import Home from './Home'
const Navigation = () => {
  return (
    <div className='nav'>
      <div className='inner_nav'>
        <div>
          <Link to='/'>HOME</Link>
        </div>
        <div>
          <Link to='/menu'>MENU</Link>
        </div>
        <div>
          <Link to='/catering'>CATERING</Link>
        </div>
        <div>
          <Link to='/about'>ABOUT</Link>
        </div>
        <div>
          <Link to='/contact'>CONTACT</Link>
        </div>
      </div>
    </div>
  )
}

export default Navigation
