import React, { Component } from 'react'
import Navigation from './components/Navigation'
import './App.css'
import { Route, Link } from 'react-router-dom'
import Home from './components/Home'
import Footer from './components/Footer'
import Menu from './components/Menu'
import Cartering from './components/Cartering'
import About from './components/About'
import Contact from './components/Contact'
import logo from './images/new_logo.png'

class App extends Component {
  handleClassName = () => {
    switch (window.location.pathname) {
      case '/':
        return 'pimg1'
        break
      case '/menu':
        return 'pimg2'
        break
      case '/catering':
        return 'pimg3'
        break
      case '/about':
        return 'pimg4'
        break
      case '/contact':
        return 'pimg5'
        break
      default:
        break
    }
  }
  render () {
    console.log(window.location.pathname === '/')

    return (
      <div className='main_div'>
        <div className={this.handleClassName()}>
          <Link to='/'>
            <img className='logo' src={logo} />
          </Link>
        </div>
        <Navigation />
        {/* <div className='cta'> */}
        <Route exact path='/' component={Home} />
        <Route path='/menu' component={Menu} />
        <Route path='/catering' component={Cartering} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        {/* </div> */}
        <Footer className='footer' />
      </div>
    )
  }
}

export default App
