import React, {useEffect} from 'react'

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='about_container'>
      <h3>History</h3>
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
        class='aligncenter wp-image-268'
        src='http://theoriginalpepes.com/wp-content/uploads/2016/07/DSC9697-1024x680.jpg'
        width='400'
        height='266'
        srcset='http://theoriginalpepes.com/wp-content/uploads/2016/07/DSC9697-1024x680.jpg 1024w, http://theoriginalpepes.com/wp-content/uploads/2016/07/DSC9697-300x199.jpg 300w, http://theoriginalpepes.com/wp-content/uploads/2016/07/DSC9697-768x510.jpg 768w, http://theoriginalpepes.com/wp-content/uploads/2016/07/DSC9697-500x332.jpg 500w'
        sizes='(max-width: 400px) 100vw, 400px'
      />
    </div>
  )
}

export default About
