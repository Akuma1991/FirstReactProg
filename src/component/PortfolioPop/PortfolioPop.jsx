import React, { Component } from 'react'
import $ from 'jquery'
import style from './PortfolioPop.module.css'



export default class PortfolioPop extends Component {

  componentDidMount() {

    $(".btnClose").on('click', function () {
      closeModal();
    });
    function closeModal() {
      $(`.modal`).removeClass('d-block');
      $(`.modal`).addClass('d-none');
    }

  }

  render() {
    console.log(this.props.imageInfo);
    return (
      <>
        <div>

          <div className={`modal fade d-block opacity-100 ${style.zIndex}`} id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className={`modal-dialog  m-auto ${style.modalDialog} `}>
              <div className={`modal-content ${style.modalContent}`}>
                <div className="modal-header border-bottom-0">
                  <button type="button" className="btn btn-transparent ms-auto btnClose" data-bs-dismiss="modal" aria-label="Close" >
                    <i className={`fas fa-times ${style.closex}`}></i>
                  </button>
                </div>
                <div className="modal-body text-center ">
                  <div className="">
                    <h2 className="mb-4">{this.props.imageInfo.title}</h2>
                    <div className={`${style.divLine} mb-4`}>
                      <i className="fas fa-star fs-2 " ></i>
                    </div>
                    <img src={this.props.imageInfo.src} className="w-75" alt="" />
                    <p className="w-75 m-auto mt-5 text-dark fw-bold fs-6">
                      {this.props.imageInfo.decription}
                    </p>
                  </div>

                </div>
                <div className="modal-footer border-top-0 py-5">
                  <button type="button" className={`btn  rounded-3 btnClose d-block m-auto text-white ${style.btnColor}`} >
                  <i className={`fas fa-times me-2 text-white`}></i>
                    Close Window</button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </>
    )
  }
}
