import React, { Component } from 'react'
import Navigation from './components/Navigation'
import './App.css'
import { Route, Link, Switch } from 'react-router-dom'
import Home from './components/Home'
import Footer from './components/Footer'
import Menu from './components/Menu'
import Cartering from './components/Cartering'
import About from './components/About'
import Contact from './components/Contact'
import logo from './images/new_logo.png'
import NoMatch from './components/NoMatch'
import Hamburger from './components/Hamburger'

class App extends Component {
  // will decide what the className based on window location
  // each class will have a different background img
  // handleClassName will be called every time the Link component is clicked
  handleClassName = () => {
    switch (window.location.pathname) {
      // case for Home Component
      case '/':
        return 'pimg1'
        break
      // case for Menu Component
      case '/menu':
        return 'pimg2'
        break
      // case for Catering Component
      case '/catering':
        return 'pimg3'
        break
      // case for About Component
      case '/about':
        return 'pimg4'
        break
      // case for Contact Component
      case '/contact':
        return 'pimg5'
        break
      // case for everything else => don't do anything
      default:
        return 'pimg6'
        break
    }
  }
  render() {
    return (
      <div className='main_div'>
        {/* calling handleClassName to assign proper className based on Window.Location (URL) */}
        <Hamburger />
        <div className={this.handleClassName()}>
          <Link to='/'>
            <img className='logo' src={logo} />
          </Link>
        </div>
        <Navigation />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/menu' component={Menu} />
          <Route path='/catering' component={Cartering} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route component={NoMatch} />
        </Switch>
        <Footer className='footer' />
      </div>
    )
  }
}

export default App
