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
import { TweenMax } from 'gsap'

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
    this.overlay = React.createRef()
    this.overlay2 = React.createRef()
    this.overlay3 = React.createRef()
    this.overlay4 = React.createRef()
    this.overlay5 = React.createRef()
    this.overlay6 = React.createRef()
    this.overlay7 = React.createRef()
    this.overlay8 = React.createRef()
    this.overlay9 = React.createRef()
  }

  _onMouseMove = (e, ref, overlay) => {
    const edge = this.closestEdge(ref, e, overlay)
    console.log(edge)
  }
  _onMouseLeave = (e, ref, overlay) => {
    const edge = this.closestEdges(ref, e, overlay)
    console.log(edge)
  }
  closestEdges = (elem, e, overlay) => {
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
        TweenMax.to(overlay.current, 0.2, { left: '-100%' })
        break
      case rightEdgeDist:
        TweenMax.to(overlay.current, 0.2, { left: '100%' })
        break
      case topEdgeDist:
        TweenMax.to(overlay.current, 0.2, { top: '-100%' })
        break
      case bottomEdgeDist:
        TweenMax.to(overlay.current, 0.2, { top: '100%' })
        break
    }
  }
  closestEdge = (elem, e, overlay) => {
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
        overlay.current.style.top = '0%'
        overlay.current.style.left = '-100%'
        TweenMax.to(overlay.current, 0.2, { left: '0%' })
        break
      case rightEdgeDist:
        overlay.current.style.top = '0%'
        overlay.current.style.left = '100%'
        TweenMax.to(overlay.current, 0.2, { left: '0%' })
        break
      case topEdgeDist:
        overlay.current.style.top = '-100%'
        overlay.current.style.left = '0%'
        TweenMax.to(overlay.current, 0.2, { top: '0%' })
        break
      case bottomEdgeDist:
        overlay.current.style.top = '100%'
        overlay.current.style.left = '0%'
        TweenMax.to(overlay.current, 0.2, { top: '0%' })
        break
    }
  }
  componentDidMount () {
    window.scrollTo(0, 0)
  }
  render () {
    return (
      <div className='home_container'>
        <Combination_plates />
        <div className='home_cta'>
          <strong>FINEST MEXICAN GRILL</strong>
        </div>
        <div className='grid_container'>
          <div
            className='boxes'
            onMouseEnter={(e) => this._onMouseMove(e, this.myRef, this.overlay)}
            onMouseLeave={(e) =>
              this._onMouseLeave(e, this.myRef, this.overlay)}
            ref={this.myRef}
          >
            <img
              className='grid'
              id='slide'
              src={image}
              alt='enchilada plate'
            />
            <div ref={this.overlay} className='overlay'>
              <div className='circle'>
                <i className='fas fa-search-plus' />
              </div>
            </div>
          </div>
          <div
            className='boxes'
            onMouseEnter={(e) =>
              this._onMouseMove(e, this.myRef2, this.overlay2)}
            onMouseLeave={(e) =>
              this._onMouseLeave(e, this.myRef2, this.overlay2)}
            ref={this.myRef2}
          >
            <img className='grid' src={tacos_img} alt='tacos' />
            <div ref={this.overlay2} className='overlay'>
              <div className='circle'>
                <i className='fas fa-search-plus' />
              </div>
            </div>
          </div>
          <div
            className='boxes'
            onMouseEnter={(e) =>
              this._onMouseMove(e, this.myRef3, this.overlay3)}
            onMouseLeave={(e) =>
              this._onMouseLeave(e, this.myRef3, this.overlay3)}
            ref={this.myRef3}
          >
            <img className='grid' src={green_salsa} alt='green salsa' />
            <div ref={this.overlay3} className='overlay'>
              <div className='circle'>
                <i className='fas fa-search-plus' />
              </div>
            </div>
          </div>
          <br />
          <div
            className='boxes'
            onMouseEnter={(e) =>
              this._onMouseMove(e, this.myRef4, this.overlay4)}
            onMouseLeave={(e) =>
              this._onMouseLeave(e, this.myRef4, this.overlay4)}
            ref={this.myRef4}
          >
            <img className='grid' src={chips} alt='chips & salsa' />
            <div ref={this.overlay4} className='overlay'>
              <div className='circle'>
                <i className='fas fa-search-plus' />
              </div>
            </div>
          </div>
          <div
            className='boxes'
            onMouseEnter={(e) =>
              this._onMouseMove(e, this.myRef5, this.overlay5)}
            onMouseLeave={(e) =>
              this._onMouseLeave(e, this.myRef5, this.overlay5)}
            ref={this.myRef5}
          >
            <img className='grid' src={taquitos} alt='taquitos and guac' />
            <div ref={this.overlay5} className='overlay'>
              <div className='circle'>
                <i className='fas fa-search-plus' />
              </div>
            </div>
          </div>
          <div
            className='boxes'
            onMouseEnter={(e) =>
              this._onMouseMove(e, this.myRef6, this.overlay6)}
            onMouseLeave={(e) =>
              this._onMouseLeave(e, this.myRef6, this.overlay6)}
            ref={this.myRef6}
          >
            <img className='grid' src={orange_salsa} alt='orange_salsa' />
            <div ref={this.overlay6} className='overlay'>
              <div className='circle'>
                <i className='fas fa-search-plus' />
              </div>
            </div>
          </div>
          <br />
          <div
            className='boxes'
            onMouseEnter={(e) =>
              this._onMouseMove(e, this.myRef7, this.overlay7)}
            onMouseLeave={(e) =>
              this._onMouseLeave(e, this.myRef7, this.overlay7)}
            ref={this.myRef7}
          >
            <img className='grid' src={burrito} alt='asada burrito' />
            <div ref={this.overlay7} className='overlay'>
              <div className='circle'>
                <i className='fas fa-search-plus' />
              </div>
            </div>
          </div>
          <div
            className='boxes'
            onMouseEnter={(e) =>
              this._onMouseMove(e, this.myRef8, this.overlay8)}
            onMouseLeave={(e) =>
              this._onMouseLeave(e, this.myRef8, this.overlay8)}
            ref={this.myRef8}
          >
            <img className='grid' src={red_salsa} alt='red_salsa' />
            <div ref={this.overlay8} className='overlay'>
              <div className='circle'>
                <i className='fas fa-search-plus' />
              </div>
            </div>
          </div>
          <div
            className='boxes'
            onMouseEnter={(e) =>
              this._onMouseMove(e, this.myRef9, this.overlay9)}
            onMouseLeave={(e) =>
              this._onMouseLeave(e, this.myRef9, this.overlay9)}
            ref={this.myRef9}
          >
            <img className='grid' src={chips} alt='chips & salsa' />
            <div ref={this.overlay9} className='overlay'>
              <div className='circle'>
                <i className='fas fa-search-plus' />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Home
