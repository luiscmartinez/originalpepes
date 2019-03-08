import React from 'react'
import { Route, Link } from 'react-router-dom'
import Home from './Home'
const Navigation = () => {
  return (
    <div className='nav'>
      <svg className='svg' width='27' height='24'>
        <line x1='3' y1='3' x2='24' y2='3' />
        <line x1='3' y1='10' x2='24' y2='10' />
        <line x1='3' y1='16' x2='24' y2='16' />
      </svg>
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
