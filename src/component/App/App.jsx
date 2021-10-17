import React, { Component } from 'react'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
import Home from '../Home/Home'
import Location from '../Location/Location'
import Portfolio from '../Portfolio/Portfolio'
import $ from 'jquery'


export default class App extends Component {

  componentDidMount() {
    $(window).on("scroll", function (e) {
      let portfolioOffset = $('#portfolio').offset().top;
      let aboutOffset = $('#about').offset().top;
      let contactOffset = $('#contact').offset().top;
      let scrollTop = $(window).scrollTop();

      let portfolioHeight = $('#portfolio').innerHeight();
      let aboutHeight = $('#about').innerHeight();
      let contactHeight = $('#contact').innerHeight();




      if (scrollTop >= portfolioOffset - 100 && scrollTop < (portfolioOffset + portfolioHeight - 100)) {
        $('.portfolioLink').css('backgroundColor', 'rgb(26, 188, 156)');
      }
      else {
        $('.portfolioLink').css('backgroundColor', 'transparent');
      }
      if (scrollTop >= aboutOffset - 100 && scrollTop < (aboutOffset + aboutHeight - 100)) {
        $('.aboutLink').css('backgroundColor', 'rgb(26, 188, 156)');
      }
      else {
        $('.aboutLink').css('backgroundColor', 'transparent');
      }
      if (scrollTop >= contactOffset - 100 && scrollTop < (contactOffset + contactHeight - 100)) {
        $('.contactLink').css('backgroundColor', 'rgb(26, 188, 156)');
      }
      else {
        $('.contactLink').css('backgroundColor', 'transparent');
      }
    });



  }

  render() {

    return (
      <>
        <Home />
        <Portfolio />
        <About />
        <Contact />
        <Location />
        <Footer />
      </>
    )
  }
}


