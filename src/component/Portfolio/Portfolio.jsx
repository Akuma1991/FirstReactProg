import React, { Component } from 'react'
import ReactDOM from 'react-dom';

import style from './Portfolio.module.css'
import stylePop from '../PortfolioPop/PortfolioPop.module.css'
import IMAGES from './images/images.js'
import $ from 'jquery'

import PortfolioPop from '../PortfolioPop/PortfolioPop';







export default class Portfolio extends Component {


    componentDidMount() {

        displayImages();
        popWindow();
        function displayImages() {
            let rowDiv = document.querySelector(`.row`);
            let rowContent = ``;

            IMAGES.map((image) => {
                rowContent += `<div class="col-12 col-md-6 pt-5 pe-lg-5 pe-md-5 col-lg-4">
            <div class="${style.imgContainer} position-relative">
            <div class="${style.imgLayer} position-absolute top-0 start-0 bottom-0 end-0 " id="${image.name}" target ="${image.src}" title="${image.description}">
            <i class="fas fa-plus text-white m-auto"></i>
            </div>
           <img src="${image.src}" alt="${image.name}" class="w-100" />
          </div>
          </div>`;
            });
            rowDiv.innerHTML = rowContent;
        }

        function popWindow() {

            $(`.${style.imgLayer}`).on('click', function () {
                $(`.${style.PortfolioPop}`).css('display', "block");
                $(`.${stylePop.zIndex}`).removeClass('d-none');
                $(`.${stylePop.zIndex}`).addClass('d-block');

                let imgInfo = {
                    title: $(this).attr('id'),
                    src: $(this).attr('target'),
                    decription:$(this).attr('title')
                };

                ReactDOM.render(
                    <React.StrictMode>
                        <PortfolioPop imageInfo={imgInfo} />
                    </React.StrictMode>,
                    document.getElementById('popWindow')
                );
            });
        }


    }


    render() {

        return (

            <>
                <section id="portfolio" className={`${style.portfolio} `}>
                    <div className={`container ${style.container}`}>
                        <h2 className="text-center mb-3">PORTFOLIO</h2>
                        <div className={`${style.divLine} mb-4 text-center`}>
                            <i className="fas fa-star fs-2 " ></i>
                        </div>
                        <div className="row"  >

                        </div>
                        <div className={`${style.PortfolioPop}`} id="popWindow">

                        </div>
                    </div>

                </section>

            </>
        )
    }
}


