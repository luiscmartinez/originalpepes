import { Component } from 'react'
import ReactDOM from 'react-dom'

// Targetting Dom Node #Root's sibling
const portalRoot = document.getElementById('portal')

export default class Modal extends Component {
  constructor(props) {
    super(props)
    // creating a div
    this.el = document.createElement('div')
  }

  componentDidMount() {
    // appending React Children inside of portalRoot
    portalRoot.appendChild(this.el)
  }

  componentWillUnmount() {
    // removing created div
    portalRoot.removeChild(this.el)
    // unlocking scrolling
    document.getElementById('body').setAttribute('style', 'overflow: auto')
  }

  render() {
    // locking scrolling position
    document.getElementById('body').setAttribute('style', 'overflow: hidden')

    // React does *not* create a new div. It renders the children into `domNode`.
    // `domNode` is any valid DOM node, regardless of its location in the DOM.

    // Destructuring children off props being passing from photo grid
    const { children } = this.props
    // Creating portal
    return ReactDOM.createPortal(children, this.el)
  }
}
