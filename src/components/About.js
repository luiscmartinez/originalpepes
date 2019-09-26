import React, { useEffect } from 'react'
import foodplate from '../images/food_plate (1).jpg'

const About = () => {
  useEffect(() => {
    // renders component to top of window position
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='cta_container'>
      <h3 style={{ color: 'black' }}>History</h3>
      <p>
        Pepe’s was founded in Southern California in 1962 by two brothers, Joe
        and Tony Russi. The restaurant was originally named “El Adobe” and in
        1963 renamed “El Jardin”, the location was changed several times finally
        settling in Alhambra in 1964, where the name was changed permanently to
        “Pepe’s”. During these early years, the brothers often relied on the
        help of the family members to keep the business growing. In 1963, their
        nephew “Pepe” was sent to fight in Vietnam. This is when Joe and Tony,
        out of love for their nephew, renamed the restaurant in honor of him.
      </p>
      <br />
      <p>
        In the following years, the restaurant had become a great success.
        However, in 1976 Tony passed away leaving Joe and his wife Maria to run
        the business. In 1976, the youngest of the three brothers, Fred Russi,
        joined in helping to expand Pepe’s Restaurants with the opening of the
        Downey Location. Since then, Pepe’s has continued to grow, opening
        locations in Los Angeles, Orange County, and in San Bernardino County.
        Still owned and operated by the Russi Family.
      </p>
      <br />
      <p>
        The restaurants are continuously serving Southern California with high
        quality fresh Mexican food. Keeping their secret recipes inside the
        family. This is what has made Pepe’s the well-known establishment it is
        today.
      </p>
      <img
        class='aligncenter'
        src={foodplate}
        width='400'
        height='266'
        sizes='(max-width: 400px) 100vw, 400px'
        alt='food plate'
      />
    </div>
  )
}

export default About
