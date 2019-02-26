import React from 'react'
import { Link } from 'react-router-dom'

const Combination_plates = () => {
  return (
    <div
      className={
        window.location.pathname === '/menu' ? 'none' : 'cta_container'
      }
    >
      <h3 className='headers'>COMBINATION PLATES </h3>
      <p>
        All Plates Come With Beans, Cheese, Rice with Green Sauce & Guacamole
      </p>
      <ul>
        <li>
          <strong>#1 GREEN CHILE PORK*</strong>
        </li>
        <li>
          <strong>#2 RED CHILE BEEF*</strong>
        </li>
        <li>
          <strong>#3 TWO CHEESE ENCHILADAS</strong>
          <p>With Onions</p>
        </li>
        <li>
          <strong>#4 TWO BEEF ENCHILADAS</strong>
          <p>With Onions</p>
        </li>
        <li>
          <strong>#5 ONE CHEESE ENCHILADA & ONE HARD TACO</strong>
        </li>
        <li>
          <strong>#6 ONE BEEF ENCHILADA & ONE HARD TACO</strong>
        </li>
        <li>
          <strong>#7 TWO TAQUITOS WITH GUACAMOLE</strong>
        </li>
        <li>
          <strong>#8 TWO HARD TACOS</strong>
        </li>
        <li>
          <strong>#9 TWO CHILE RELLENOS*</strong>
        </li>
        <li>
          <strong>#10 MACHACA*</strong>
          <p>Shredded Beef, Bell Peppers, Onions, Tomato & Eggs</p>
        </li>
        <li>
          <strong>#11 CARNITAS*</strong>
          <p>With Fresh Salsa</p>
        </li>
        <li>
          <strong>#12 CARME ASADA*</strong>
          <p>With Fresh Salsa</p>
        </li>
        <li>
          <strong>#13 STEAK PICAD0*</strong>
          <p>Chopped Steak, Onions, Tomato & Bell Pepper</p>
        </li>
        <li>
          <strong>#14 CHORIZO & EGGS*</strong>
        </li>
        <li>
          <strong>#15 ONE CHILE RELLENO & ONE TACO</strong>
        </li>
        <li>
          <strong>#16 HUEVOS RANCHEROS*</strong>
        </li>
        <li>
          <strong>#17 HUEVOS A LA MEXICANA*</strong>
        </li>
        <span>* comes with your choice of tortillas</span>
      </ul>
      <Link
        className={window.location.pathname === '/menu' ? 'hidden' : 'link'}
        to='/menu'
      >
        VIEW FULL MENU &#8594;
      </Link>
    </div>
  )
}

export default Combination_plates
