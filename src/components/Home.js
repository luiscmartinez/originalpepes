import React from 'react'
import { Link } from 'react-router-dom'
import Combination_plates from './menu_component/Combination-plates'
import image from '../images/food_plate (1).jpg'
import tacos_img from '../images/home_hero (1).jpg'
import green_salsa from '../images/green_salsa (1).jpg'
import chips from '../images/about_hero (1).jpg'
import taquitos from '../images/taquitos (1).jpg'
import orange_salsa from '../images/catering_hero (1).jpg'
import burrito from '../images/menu_hero (1).jpg'
import red_salsa from '../images/contact_hero (1).jpg'
import chiles from '../images/chiles (1).jpg'

const Home = () => {
  return (
    <div className='home_container'>
      <Combination_plates />
      <div className='home_cta'>
        <strong>FINEST MEXICAN GRILL</strong>
      </div>
      <div className='grid_container'>
        <img className='grid' src={image} alt='enchilada plate' />
        <img className='grid' src={tacos_img} alt='tacos' />
        <img className='grid' src={green_salsa} alt='green salsa' />
        <br />
        <img className='grid' src={chips} alt='chips & salsa' />
        <img className='grid' src={taquitos} alt='taquitos and guac' />
        <img className='grid' src={orange_salsa} alt='orange_salsa' />
        <br />
        <img className='grid' src={burrito} alt='asada burrito' />
        <img className='grid' src={red_salsa} alt='red_salsa' />
        <img className='grid' src={chips} alt='chips & salsa' />
      </div>
    </div>
  )
}
export default Home
