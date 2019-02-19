import React from 'react'
import { Link } from 'react-router-dom'
import Navigation from './Navigation'

const Footer = () => {
  return (
    <div className='footer'>
      <Link to='/home'>
        <img
          style={{ width: '200px' }}
          src='http://theoriginalpepes.com/wp-content/uploads/2016/07/final_pepes-logo.png'
          alt='The Original Pepe'
          className='site-logo'
        />
      </Link>
      <Navigation />
      <div>
        <img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgMGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnM1LjM3MyAxMiAxMiAxMiAxMi01LjM3MyAxMi0xMi01LjM3My0xMi0xMi0xMnptMyA4aC0xLjM1Yy0uNTM4IDAtLjY1LjIyMS0uNjUuNzc4djEuMjIyaDJsLS4yMDkgMmgtMS43OTF2N2gtM3YtN2gtMnYtMmgydi0yLjMwOGMwLTEuNzY5LjkzMS0yLjY5MiAzLjAyOS0yLjY5MmgxLjk3MXYzeiIvPjwvc3ZnPg==' />
      </div>
      <footer>
        <p>© 2019 The Original Pepe's</p>
      </footer>
    </div>
  )
}
export default Footer
