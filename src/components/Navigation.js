import React, { useState } from 'react'
import { Route, Link } from 'react-router-dom'
import Home from './Home'
import closeIcon from '../images/close.svg'

const Navigation = () => {
  const [isActive, setIsActive] = useState(false)
  const handleClick = e => {
    setIsActive(true)
  }
  return (
    <div className='nav'>
      {/* SVG will only display on moblie width */}

      <div className='inner_nav'>
        <h2>
          <Link to='/'>home</Link>
        </h2>
        <h2>
          <Link to='/menu'>menu</Link>
        </h2>
        <h2>
          <Link to='/catering'>catering</Link>
        </h2>
        <h2>
          <Link to='/about'>about</Link>
        </h2>
        <h2>
          <Link to='/contact'>contact</Link>
        </h2>
      </div>
    </div>
  )
}

export default Navigation
