import React, { useEffect } from 'react'

const Cartering = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='cartering_container'>
      <p>
        Contact us for all of your catering needs. Everything is pre-packaged
        with chips, salsa and utensils. Everything you need to have a successful
        event. CALL FOR PRICING
      </p>
      <h3>** CATERING MENU **</h3>
      <h4>BURRITOS</h4>
      <p>
        <strong>Tray of mini Burritos</strong>(14 in total)<br />Comes with
        green or red chili sauce and covered in cheese (choose with rice inside
        or outside) Choice of carne asada, chicken, carnitas, shredded beef,
        green chile pork, red chili beef or bean and cheese
      </p>
      <h4>ENCHILADAS</h4>
      <p>
        (24 in total) <br />Choice of chicken, shredded beef or cheese and
        topped with parsley, black olives and tomatoes
      </p>
      <h4>TACOS</h4>
      <p>
        <strong>Hard shell</strong> (18 in total) <br />Choice of beef or
        chicken. Contains lettuce, cheese and tomatoes<br />
        <strong>Soft shell</strong> (18 in total)
        <br />
        Choice of chicken, caritas or carne asada. Comes with lettuce, cheese,
        fresh salsa and pepe mole
      </p>
      <h4>TAQUITOS</h4>
      <p>
        (guacamole is packed separately) <br />
        <strong>Chicken or Beef</strong>
        <br /> 2 Dozen (24 in total)<br />3 Dozen(36 in total) <br />4 Dozen (48
        in total)
      </p>
      <h4>Sides</h4>
      <p>
        (small, serves 6 - 8, large serves 12 - 16)<br />
        Beans with cheese<br />
        Rice with green sauce<br />Fresh salsa<br />Guacamole<br />Shredded
        cheese<br />Diced tomatoes<br />Sour cream<br />Chip tray(serves 20-25)
      </p>
      <h4>SPECIALITY ITEMS</h4>
      <p>
        (24 hor advanced notice)<br />Round Tray of mini taquitos (55 in total)<br />Salad
        (small serves 17-20, large serves 40-45)<br />Lettuce,cucumber,cheese,carrots,tomatoes,cilantro,and
        corn chips
      </p>
    </div>
  )
}

export default Cartering
