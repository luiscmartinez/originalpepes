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

class Home extends React.Component {
  constructor (props) {
    super(props)
    this.myRef = React.createRef()
    this.myRef2 = React.createRef()
    this.myRef3 = React.createRef()
    this.myRef4 = React.createRef()
    this.myRef5 = React.createRef()
    this.myRef6 = React.createRef()
    this.myRef7 = React.createRef()
    this.myRef8 = React.createRef()
    this.myRef9 = React.createRef()
  }

  _onMouseMove = (e, ref) => {
    const edge = this.closestEdge(ref, e)
    console.log(edge)
  }
  closestEdge = (elem, e) => {
    const elemBounding = elem.current.getBoundingClientRect()
    console.log(elemBounding)

    const elementLeftEdge = elemBounding.left
    const elementTopEdge = elemBounding.top
    const elementRightEdge = elemBounding.right
    const elementBottomEdge = elemBounding.bottom
    const mouseX = e.clientX
    const mouseY = e.clientY

    const topEdgeDist = Math.abs(elementTopEdge - mouseY)
    const bottomEdgeDist = Math.abs(elementBottomEdge - mouseY)
    const leftEdgeDist = Math.abs(elementLeftEdge - mouseX)
    const rightEdgeDist = Math.abs(elementRightEdge - mouseX)

    const min = Math.min(
      topEdgeDist,
      bottomEdgeDist,
      leftEdgeDist,
      rightEdgeDist
    )

    switch (min) {
      case leftEdgeDist:
        return 'left'
      case rightEdgeDist:
        return 'right'
      case topEdgeDist:
        return 'top'
      case bottomEdgeDist:
        return 'bottom'
    }
  }
  render () {
    return (
      <div className='home_container'>
        <Combination_plates />
        <div className='home_cta'>
          <strong>FINEST MEXICAN GRILL</strong>
        </div>
        <div className='grid_container'>
          <img
            onMouseEnter={(e) => this._onMouseMove(e, this.myRef)}
            onMouseLeave={(e) => this._onMouseMove(e, this.myRef)}
            ref={this.myRef}
            className='grid'
            id='slide'
            src={image}
            alt='enchilada plate'
          />
          <img
            onMouseEnter={(e) => this._onMouseMove(e, this.myRef2)}
            onMouseLeave={(e) => this._onMouseMove(e, this.myRef2)}
            ref={this.myRef2}
            className='grid'
            src={tacos_img}
            alt='tacos'
          />
          <img
            onMouseEnter={(e) => this._onMouseMove(e, this.myRef3)}
            onMouseLeave={(e) => this._onMouseMove(e, this.myRef3)}
            ref={this.myRef3}
            className='grid'
            src={green_salsa}
            alt='green salsa'
          />
          <br />
          <img
            onMouseEnter={(e) => this._onMouseMove(e, this.myRef4)}
            onMouseLeave={(e) => this._onMouseMove(e, this.myRef4)}
            ref={this.myRef4}
            className='grid'
            src={chips}
            alt='chips & salsa'
          />
          <img
            onMouseEnter={(e) => this._onMouseMove(e, this.myRef5)}
            onMouseLeave={(e) => this._onMouseMove(e, this.myRef5)}
            ref={this.myRef5}
            className='grid'
            src={taquitos}
            alt='taquitos and guac'
          />
          <img
            onMouseEnter={(e) => this._onMouseMove(e, this.myRef6)}
            onMouseLeave={(e) => this._onMouseMove(e, this.myRef6)}
            ref={this.myRef6}
            className='grid'
            src={orange_salsa}
            alt='orange_salsa'
          />
          <br />
          <img
            onMouseEnter={(e) => this._onMouseMove(e, this.myRef7)}
            onMouseLeave={(e) => this._onMouseMove(e, this.myRef7)}
            ref={this.myRef7}
            className='grid'
            src={burrito}
            alt='asada burrito'
          />
          <img
            onMouseEnter={(e) => this._onMouseMove(e, this.myRef8)}
            onMouseLeave={(e) => this._onMouseMove(e, this.myRef8)}
            ref={this.myRef8}
            className='grid'
            src={red_salsa}
            alt='red_salsa'
          />
          <img
            onMouseEnter={(e) => this._onMouseMove(e, this.myRef9)}
            onMouseLeave={(e) => this._onMouseMove(e, this.myRef9)}
            ref={this.myRef9}
            className='grid'
            src={chips}
            alt='chips & salsa'
          />
        </div>
      </div>
    )
  }
}
export default Home
