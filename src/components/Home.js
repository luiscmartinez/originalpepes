import React from 'react'
import { Link } from 'react-router-dom'
import Combination_plates from './menu_component/Combination-plates'

const Home = () => {
  return (
    <div className='home_container'>
      <Combination_plates />
      <div className='home_cta'>
        <strong>FINEST MEXICAN GRILL</strong>
      </div>
      <div>
        <p>insert images here lol</p>
      </div>
    </div>
  )
}
export default Home
