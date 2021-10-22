import React, { Component } from 'react'
import style from './Home.module.css'
import homeImage from './images/avataaars.svg';



export default class Home extends Component {
    render() {
        return (
            <>
                <section className={style.home}>
                    
                    <div className="d-flex flex-column justify-content-center align-items-center h-100">
                        <div className="text-center h-75">
                            <div className="mb-4">
                                <img src={homeImage} className={`${style.homeImg}`} alt="" />
                            </div>
                            <h1 className="text-white mb-2">START REACT</h1>
                            <div className={`${style.divLine} mb-4`}>
                                <i className="fas fa-star fs-2 text-white" ></i>
                            </div>
                            <p>
                                Graphic Artist - Web Designer - Illustrator

                            </p>
                        </div>
                    </div>
                </section>

            </>
        )
    }
}
