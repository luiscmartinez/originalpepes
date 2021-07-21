import React, { useState, useRef } from 'react'
import burgerIcon from '../images/burger.svg'
import { useHistory, useLocation } from "react-router-dom";
import useOnClickOutside from 'use-onclickoutside'

const Hamburger = () => {
  const [isActive, setIsActive] = useState(false)
  const handleClick = e => {
    setIsActive(true)
  }
  const handleLink = link => {
    setIsActive(false)
    history.push(link)
  }
  let location = useLocation();
  let history = useHistory();

  const ref = useRef()
  useOnClickOutside(ref, e => {
    setIsActive(false)
  })

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
        <div className='nav_li' ref={ref}>
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
