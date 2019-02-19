import React from 'react'
import { Link } from 'react-router-dom'
import Combination_plates from './menu_component/Combination-plates'

const Home = () => {
  return (
    <div className='home_container'>
      <Combination_plates />
      <Link to='/menu'>
        <h1>VIEW FULL MENU</h1>
      </Link>
      <h1>FINEST MEXICAN GRILL</h1>
      <div>
        <p>insert images here lol</p>
      </div>
    </div>
  )
}
export default Home
