import React from 'react'
import { Route, Link } from 'react-router-dom'
import Home from './Home'
import burgerIcon from '../images/burger.svg'
import closeIcon from '../images/close.svg'

const Navigation = () => {
  return (
    <div className='nav'>
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
