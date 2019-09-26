import React, { useState } from 'react'
import burgerIcon from '../images/burger.svg'
import { Link } from 'react-router-dom'
import { useRouter } from '../hooks'
const Hamburger = () => {
  const [isActive, setIsActive] = useState(false)
  const handleClick = e => {
    setIsActive(true)
  }
  const handleLink = link => {
    setIsActive(false)
    history.push(link)
  }
  const { location, history } = useRouter()

  return (
    <div
      className={`nav burger_nav`}
      style={isActive ? { top: '0px' } : { top: '20px' }}
    >
      <img
        onClick={handleClick}
        className={isActive ? 'hide' : 'burger'}
        src={burgerIcon}
      />
      <div className={isActive ? 'active_nav' : 'hide'}>
        <div className='nav_li'>
          <h2>
            <div onClick={e => handleLink('/')}>home</div>
          </h2>
          <h2>
            <div onClick={e => handleLink('/menu')}>menu</div>
          </h2>
          <h2>
            <div onClick={e => handleLink('/catering')}>catering</div>
          </h2>
          <h2>
            <div onClick={e => handleLink('/about')}>about</div>
          </h2>
          <h2>
            <div onClick={e => handleLink('/contact')}>contact</div>
          </h2>
        </div>
      </div>
    </div>
  )
}

export default Hamburger
