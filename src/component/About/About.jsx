import React, { Component } from 'react'
import style from './About.module.css'

export default class About extends Component {
    render() {
        return (
            <>
                <section id="about" className={`${style.about}`}>
                    <div className={`container ${style.container}`}>
                        <h2 className="text-center mb-3">ABOUT</h2>
                        <div className={`${style.divLine} mb-5 text-center`}>
                            <i className="fas fa-star fs-2 " ></i>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-12 col-lg-4">
                                <div className="pe-4">
                                    <p>
                                        Freelancer is a free bootstrap theme created by Start Bootstrap.
                                        The download includes the complete source files including HTML, CSS, and JavaScript
                                        as well as optional SASS stylesheets for easy customization.
                                    </p>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4">
                                <div className="pe-4">
                                    <p>
                                        You can create your own custom avatar for the masthead,
                                        change the icon in the dividers,
                                        and add your email address to the contact form to make it fully functional!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}
