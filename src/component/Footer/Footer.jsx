import React, { Component } from 'react'
import style from './Footer.module.css'

export default class Footer extends Component {
    render() {
        return (
            <>
                <section className={`${style.footer}`}>
                    <div className="container">
                        <div>
                            <p className="m-0 p-0 text-center ">
                            Copyright © Your Website 2021
                            </p>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}
