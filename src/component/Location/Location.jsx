import React, { Component } from 'react'
import style from './Location.module.css'


export default class Location extends Component {
    render() {
        return (
            <>
                <section className={`${style.location}`}>
                    <div className="container ">
                        <div className="row justify-content-center ">
                            <div className="col-12 col-lg-3">
                                <div className="text-center   mb-5 mb-lg-0">
                                    <h4 className="text-white mb-4 ">LOCATION</h4>
                                    <p className="fs-5 m-0">2215 John Daniel Drive</p>
                                    <p className="fs-5 m-0">Clark, MO 65243</p>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4">
                                <div className="text-center  mb-5 mb-lg-0" >
                                    <h4 className="text-white mb-4">AROUND THE WEB</h4>
                                    <ul className=" list-unstyled d-flex  text-center justify-content-evenly ">
                                        <li>
                                        <i className="fab fa-facebook-f border border-2 rounded-circle p-3"></i>
                                        </li>
                                        <li>
                                        <i className="fab fa-twitter border border-2 rounded-circle p-3"></i>
                                        </li>
                                        <li>
                                        <i className="fab fa-linkedin-in border border-2 rounded-circle p-3"></i>
                                        </li>
                                        <li>
                                        <i className="fab fa-dribbble border border-2 rounded-circle p-3"></i>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4">
                                <div className="text-center ">
                                    <h4 className="text-white mb-4">ABOUT FREELANCER</h4>
                                    <p className="fs-5 m-0">
                                        Freelance is a free to use, MIT licensed Bootstrap theme created by .
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
