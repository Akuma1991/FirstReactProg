import React, { Component } from 'react'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
import Home from '../Home/Home'
import Location from '../Location/Location'
import Portfolio from '../Portfolio/Portfolio'
import NavBar from '../NavBar/NavBar'
import Notfound from '../Notfound/Notfound'
import { Redirect, Route, Switch } from 'react-router'
import $ from 'jquery'


export default class App extends Component {



  render() {

    return (
      <>
        <NavBar />


        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
          <Route path="*" component={Notfound} />

        </Switch>
        <Location />
        <Footer />
      </>
    )
  }
}


