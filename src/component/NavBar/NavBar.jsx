import React, { Component } from 'react'
import $ from 'jquery'
import style from './NavBar.module.css'
import { NavLink } from 'react-router-dom'



export default class NavBar extends Component {


    render() {
        return (
            <>
                <div className={style.container} id="demo">
                    <nav className={`navbar navbar-expand-lg navbar-light  w-50 m-auto ${style.navbar}`}>
                        <div className="container-fluid">
                                <NavLink to='/home' className={`${style.navbarBrand} m-auto m-md-0`} href="#">START REACT</NavLink>
                            
                            <button className={`navbar-toggler text-white m-auto m-md-0  rounded-3 ${style.navbarToggler}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className=" fw-bold d-block m-auto ">MENU
                                    <i className="fas fa-bars ms-2"></i>
                                </span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ms-sm-0 ms-lg-auto mb-2 mb-lg-0 ">
                                    <li className="nav-item">
                                        <NavLink activeClassName={`${style.selected}`} to="/portfolio" className="nav-link active text-uppercase rounded-3 p-3 " aria-current="page" href="#portfolio">Portfolio</NavLink>
                                    </li>
                                    <li className="nav-item ">
                                        <NavLink activeClassName={`${style.selected}`} to="/about" className="nav-link text-uppercase rounded-3 p-3 " href="#about">About</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink activeClassName={`${style.selected}`} to="/contact" className="nav-link text-uppercase rounded-3 p-3 " href="#contact">Contact</NavLink>
                                    </li>


                                </ul>

                            </div>
                        </div>
                    </nav>
                </div>
            </>
        )
    }
}
