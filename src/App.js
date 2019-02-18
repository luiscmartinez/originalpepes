import React, { Component } from 'react'
import Navigation from './components/Navigation'
import './App.css'
import { Route, Link } from 'react-router-dom'
import Home from './components/Home'
import Footer from './components/Footer'
import Menu from './components/Menu'
import Cartering from './components/Cartering'

class App extends Component {
  render () {
    return (
      <div className='main_div'>
        <img
          className='logo'
          src={
            'http://theoriginalpepes.com/wp-content/uploads/2016/07/new_logo.png'
          }
        />
        <Navigation />
        <Route exact path='/' component={Home} />
        <Route path='/menu' component={Menu} />
        <Route path='/catering' component={Cartering} />
        <Footer />
      </div>
    )
  }
}

export default App
