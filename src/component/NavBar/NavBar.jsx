import React, { Component } from 'react'
import $ from 'jquery'
import style from './NavBar.module.css'



export default class NavBar extends Component {

    componentDidMount() {
        $(window).on("scroll", function (e) {
            let scrollTop = $(window).scrollTop();
            
            if (scrollTop >= 200 && $(window).width() >= 977) {
                $(`.${style.container}`).animate({ height: '80px' }, 0);
                $(`.${style.navbarBrand}`).animate({ paddingLeft: '0px' }, 0);
            }
            else if (scrollTop <= 200 && $(window).width() >= 977) {
                $(`.${style.container}`).animate({ height: '105px' }, 0);
                $(`.${style.navbarBrand}`).animate({ paddingLeft: '50px' }, 0);
            }

        });
    }


    render() {
        return (
            <>
                <div className={style.container} id="demo">
                    <nav className={`navbar navbar-expand-lg navbar-light  w-50 m-auto  ${style.navbar}`}>
                        <div className="container-fluid">
                            <a className={style.navbarBrand} href="#">START REACT</a>
                            <button className={`navbar-toggler text-white  rounded-3 ${style.navbarToggler}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className=" fw-bold d-block m-auto ">MENU
                                    <i className="fas fa-bars ms-2"></i>
                                </span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ms-sm-0 ms-lg-auto mb-2 mb-lg-0 ">
                                    <li className="nav-item">
                                        <a className="nav-link active text-uppercase rounded-3 p-3 portfolioLink" aria-current="page" href="#portfolio">Portfolio</a>
                                    </li>
                                    <li className="nav-item ">
                                        <a className="nav-link text-uppercase rounded-3 p-3 aboutLink" href="#about">About</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-uppercase rounded-3 p-3 contactLink" href="#contact">Contact</a>
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
