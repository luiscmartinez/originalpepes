import React, { useEffect } from 'react'

const Cartering = () => {
  // renders component to top of window position
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='cta_container'>
      <p>
        Contact us for all of your catering needs. Everything is pre-packaged
        with chips, salsa and utensils. Everything you need to have a successful
        event. CALL FOR PRICING
      </p>
      <h3 className='headers'>CATERING MENU</h3>
      <h5>BURRITOS</h5>
      <p>
        <strong>Tray of mini Burritos</strong>(14 in total)
        <br />
        Comes with green or red chili sauce and covered in cheese (choose with
        rice inside or outside) Choice of carne asada, chicken, carnitas,
        shredded beef, green chile pork, red chili beef or bean and cheese
      </p>
      <h5>ENCHILADAS</h5>
      <p>
        (24 in total) <br />
        Choice of chicken, shredded beef or cheese and topped with parsley,
        black olives and tomatoes
      </p>
      <h5>TACOS</h5>
      <p>
        <strong>Hard shell</strong> (18 in total) <br />
        Choice of beef or chicken. Contains lettuce, cheese and tomatoes
        <br />
        <strong>Soft shell</strong> (18 in total)
        <br />
        Choice of chicken, caritas or carne asada. Comes with lettuce, cheese,
        fresh salsa and pepe mole
      </p>
      <h5>TAQUITOS</h5>
      <p>
        (guacamole is packed separately) <br />
        <strong>Chicken or Beef</strong>
        <br /> 2 Dozen (24 in total)
        <br />3 Dozen(36 in total) <br />4 Dozen (48 in total)
      </p>
      <h5>SIDES</h5>
      <p>
        (small, serves 6 - 8, large serves 12 - 16)
        <br />
        Beans with cheese
        <br />
        Rice with green sauce
        <br />
        Fresh salsa
        <br />
        Guacamole
        <br />
        Shredded cheese
        <br />
        Diced tomatoes
        <br />
        Sour cream
        <br />
        Chip tray(serves 20-25)
      </p>
      <h5>SPECIALITY ITEMS</h5>
      <p>
        (24 hor advanced notice)
        <br />
        Round Tray of mini taquitos (55 in total)
        <br />
        Salad (small serves 17-20, large serves 40-45)
        <br />
        Lettuce,cucumber,cheese,
        <br />
        carrots,tomatoes,cilantro,& corn chips
      </p>
    </div>
  )
}

export default Cartering
