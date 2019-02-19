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
          <img
            className='logo'
            src={
              'http://theoriginalpepes.com/wp-content/uploads/2016/07/new_logo.png'
            }
          />
        </div>
        <Navigation />
        <Route exact path='/' component={Home} />
        <Route path='/menu' component={Menu} />
        <Route path='/catering' component={Cartering} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Footer className='footer' />
      </div>
    )
  }
}

export default App
