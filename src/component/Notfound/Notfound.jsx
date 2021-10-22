import React, { Component } from 'react'
import notFoundImg from './notfound.png'
import style from './Notfound.module.css'


export default class Notfound extends Component {
    render() {
        return (
            <div className={`container text-center ${style.container}`}>
               {/* <img src={notFoundImg} alt="" className='w-75' /> */}
            </div>
        )
    }
}
