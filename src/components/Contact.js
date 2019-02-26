import React, { useEffect } from 'react'

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      <div>
        <div className='left'>
          <h3>Drop us a line.</h3>
          <p>
            Contact us anytime with general<br />questions, comments, or
            concerns, by<br /> filling out the form below. You may also <br />reach
            us by phone at: 626-286-3055
          </p>
          <h3>WE DO CATERING</h3>
          <p>
            <strong>Pepe's Mexican Food</strong>
            <br />5829 Rosemead Blvd.<br />Temple City, CA 91780
          </p>
        </div>
        <h1 className='right'>HERE WILL GO THE MAP</h1>
      </div>
      <div>
        <img
          className='lol'
          src='http://theoriginalpepes.com/wp-content/uploads/2016/07/DSC9697.jpg'
        />
        <form>
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
