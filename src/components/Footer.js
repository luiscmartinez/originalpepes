import React from 'react'
import { Link } from 'react-router-dom'
import Navigation from './Navigation'
import logo from '../images/new_logo.png'

const Footer = () => {
  return (
    <div className='footer'>
      <Link to='/'>
        <img
          style={{ width: '200px' }}
          src={logo}
          alt='The Original Pepe'
          className='site-logo'
        />
      </Link>
      <Navigation />
      <footer>
        <p>© 2019 The Original Pepe's</p>
      </footer>
    </div>
  )
}
export default Footer
