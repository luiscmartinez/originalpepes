import React from 'react'
import Combination_plates from './menu_component/Combination-plates'
import image from '../images/food_plate (1).jpg'
import tacos_img from '../images/home_hero (1).jpg'
import green_salsa from '../images/green_salsa (1).jpg'
import chips from '../images/about_hero (1).jpg'
import taquitos from '../images/taquitos (1).jpg'
import orange_salsa from '../images/catering_hero.jpg'
import burrito from '../images/menu_hero (1).jpg'
import red_salsa from '../images/contact_hero (1).jpg'
import { gsap } from 'gsap'
import Modal from './portal'

class Home extends React.Component {
  constructor(props) {
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
    this.node = React.createRef()
    this.state = {
      toggle: false,
      img: null,
    }
  }

  handleRefClick = e => {
    console.log('handleRefClick was called')
    console.log(this.node.current)
    if (this.node.current) {
      this.setState({ toggle: false, img: null })
    }
  }
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  _onMouseMove = (e, ref, overlay) => {
    const edge = this.closestEdge(ref, e, overlay)
  }
  _onMouseLeave = (e, ref, overlay) => {
    const edge = this.closestEdges(ref, e, overlay)
  }
  closestEdges = (elem, e, overlay) => {
    const elemBounding = elem.current.getBoundingClientRect()

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
        gsap.to(overlay.current, 0.2, { left: '-100%' })
        break
      case rightEdgeDist:
        gsap.to(overlay.current, 0.2, { left: '100%' })
        break
      case topEdgeDist:
        gsap.to(overlay.current, 0.2, { top: '-100%' })
        break
      case bottomEdgeDist:
        gsap.to(overlay.current, 0.2, { top: '100%' })
        break
      default:
        break
    }
  }
  closestEdge = (elem, e, overlay) => {
    const elemBounding = elem.current.getBoundingClientRect()
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
        gsap.to(overlay.current, 0.2, { left: '0%' })
        break
      case rightEdgeDist:
        overlay.current.style.top = '0%'
        overlay.current.style.left = '100%'
        gsap.to(overlay.current, 0.2, { left: '0%' })
        break
      case topEdgeDist:
        overlay.current.style.top = '-100%'
        overlay.current.style.left = '0%'
        gsap.to(overlay.current, 0.2, { top: '0%' })
        break
      case bottomEdgeDist:
        overlay.current.style.top = '100%'
        overlay.current.style.left = '0%'
        gsap.to(overlay.current, 0.2, { top: '0%' })
        break
      default:
        break
    }
  }
  render() {
    if (this.state.img) {
      // if modal is mounted, all overlays move out
      gsap.to(this.overlay.current, 0, { left: '-100%' })
      gsap.to(this.overlay2.current, 0, { left: '-100%' })
      gsap.to(this.overlay3.current, 0, { left: '-100%' })
      gsap.to(this.overlay4.current, 0, { left: '-100%' })
      gsap.to(this.overlay5.current, 0, { left: '-100%' })
      gsap.to(this.overlay6.current, 0, { left: '-100%' })
      gsap.to(this.overlay7.current, 0, { left: '-100%' })
      gsap.to(this.overlay8.current, 0, { left: '-100%' })
      gsap.to(this.overlay9.current, 0, { left: '-100%' })
    }

    return (
      <div className='home_container'>
        {this.state.toggle && (
          <Modal>
            <div
              onClick={this.handleRefClick}
              ref={this.node}
              className='modal'
            >
              <img src={this.state.img} alt="food img" />
            </div>
          </Modal>
        )}
        <Combination_plates />
        <div className='home_cta'>
          <strong>FINEST MEXICAN GRILL</strong>
        </div>
        <div className='grid_container'>
          <div
            className='boxes'
            onMouseEnter={e => this._onMouseMove(e, this.myRef, this.overlay)}
            onMouseLeave={e => this._onMouseLeave(e, this.myRef, this.overlay)}
            ref={this.myRef}
          >
            <img
              className='grid'
              id='slide'
              src={image}
              alt='enchilada plate'
            />
            <div
              onClick={e => {
                this.setState({ toggle: true, img: image })
              }}
              ref={this.overlay}
              className='overlay'
            >
              <div className='circle'>
                <i className='fas fa-search-plus' />
              </div>
            </div>
          </div>
          <div
            className='boxes'
            onMouseEnter={e => this._onMouseMove(e, this.myRef2, this.overlay2)}
            onMouseLeave={e =>
              this._onMouseLeave(e, this.myRef2, this.overlay2)
            }
            ref={this.myRef2}
          >
            <img className='grid' src={tacos_img} alt='tacos' />
            <div
              onClick={e => {
                this.setState({ toggle: true, img: tacos_img })
              }}
              ref={this.overlay2}
              className='overlay'
            >
              <div className='circle'>
                <i className='fas fa-search-plus' />
              </div>
            </div>
          </div>
          <div
            className='boxes'
            onMouseEnter={e => this._onMouseMove(e, this.myRef3, this.overlay3)}
            onMouseLeave={e =>
              this._onMouseLeave(e, this.myRef3, this.overlay3)
            }
            ref={this.myRef3}
          >
            <img className='grid' src={green_salsa} alt='green salsa' />
            <div
              onClick={e => {
                console.log('inside onClick ')
                this.setState({ toggle: true, img: green_salsa })
              }}
              ref={this.overlay3}
              className='overlay'
            >
              <div className='circle'>
                <i className='fas fa-search-plus' />
              </div>
            </div>
          </div>
          <br />
          <div
            className='boxes'
            onMouseEnter={e => this._onMouseMove(e, this.myRef4, this.overlay4)}
            onMouseLeave={e =>
              this._onMouseLeave(e, this.myRef4, this.overlay4)
            }
            ref={this.myRef4}
          >
            <img className='grid' src={chips} alt='chips & salsa' />
            <div
              onClick={e => {
                this.setState({ toggle: true, img: chips })
              }}
              ref={this.overlay4}
              className='overlay'
            >
              <div className='circle'>
                <i className='fas fa-search-plus' />
              </div>
            </div>
          </div>
          <div
            className='boxes'
            onMouseEnter={e => this._onMouseMove(e, this.myRef5, this.overlay5)}
            onMouseLeave={e =>
              this._onMouseLeave(e, this.myRef5, this.overlay5)
            }
            ref={this.myRef5}
          >
            <img className='grid' src={taquitos} alt='taquitos and guac' />
            <div
              onClick={e => {
                this.setState({ toggle: true, img: taquitos })
              }}
              ref={this.overlay5}
              className='overlay'
            >
              <div className='circle'>
                <i className='fas fa-search-plus' />
              </div>
            </div>
          </div>
          <div
            className='boxes'
            onMouseEnter={e => this._onMouseMove(e, this.myRef6, this.overlay6)}
            onMouseLeave={e =>
              this._onMouseLeave(e, this.myRef6, this.overlay6)
            }
            ref={this.myRef6}
          >
            <img className='grid' src={orange_salsa} alt='orange_salsa' />
            <div
              onClick={e => {
                this.setState({ toggle: true, img: orange_salsa })
              }}
              ref={this.overlay6}
              className='overlay'
            >
              <div className='circle'>
                <i className='fas fa-search-plus' />
              </div>
            </div>
          </div>
          <br />
          <div
            className='boxes'
            onMouseEnter={e => this._onMouseMove(e, this.myRef7, this.overlay7)}
            onMouseLeave={e =>
              this._onMouseLeave(e, this.myRef7, this.overlay7)
            }
            ref={this.myRef7}
          >
            <img className='grid' src={burrito} alt='asada burrito' />
            <div
              onClick={e => {
                this.setState({ toggle: true, img: burrito })
              }}
              ref={this.overlay7}
              className='overlay'
            >
              <div className='circle'>
                <i className='fas fa-search-plus' />
              </div>
            </div>
          </div>
          <div
            className='boxes'
            onMouseEnter={e => this._onMouseMove(e, this.myRef8, this.overlay8)}
            onMouseLeave={e =>
              this._onMouseLeave(e, this.myRef8, this.overlay8)
            }
            ref={this.myRef8}
          >
            <img className='grid' src={red_salsa} alt='red_salsa' />
            <div
              onClick={e => {
                this.setState({ toggle: true, img: red_salsa })
              }}
              ref={this.overlay8}
              className='overlay'
            >
              <div className='circle'>
                <i className='fas fa-search-plus' />
              </div>
            </div>
          </div>
          <div
            className='boxes'
            onMouseEnter={e => this._onMouseMove(e, this.myRef9, this.overlay9)}
            onMouseLeave={e =>
              this._onMouseLeave(e, this.myRef9, this.overlay9)
            }
            ref={this.myRef9}
          >
            <img className='grid' src={chips} alt='chips & salsa' />
            <div
              onClick={e => {
                this.setState({ toggle: true, img: chips })
              }}
              ref={this.overlay9}
              className='overlay'
            >
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
