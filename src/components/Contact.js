import React, { useEffect } from 'react'
import image from '../images/map.jpg'

const Contact = () => {
  // renders component to top of window position
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div style={{ width: '100%' }} className='contact_container'>
      <div className='left'>
        <div className='info'>
          <h3>Drop us a line.</h3>
          <p>
            Contact us anytime with general
            <br />
            questions, comments, or concerns, by
            <br /> filling out the form below. You may also <br />
            reach us by phone at: 626-286-3055
          </p>
          <h3>WE DO CATERING</h3>
          <p>
            <strong>Pepe's Mexican Food</strong>
            <br />
            5829 Rosemead Blvd.
            <br />
            Temple City, CA 91780
          </p>
        </div>
        <a
          target='_blank'
          href='https://www.google.com/maps/place/Pepe&#39;s+Finest+Mexican+Food/@34.0788158,-118.1281073,17z/data=!4m5!3m4!1s0x80c2c538de46d673:0xc7de107608d17405!8m2!3d34.078487!4d-118.128456'
        >
          <img
            className='map'
            style={{ width: '100%' }}
            src={image}
            alt='map'
          />
        </a>
      </div>
      <div className='right'>
        <form style={{ width: '100%' }}>
          <input type='text' placeholder='name' />
          <input type='email' placeholder='Email' />
          <textarea placeholder='Message' />
          <button type='submit'>CONTACT US</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
