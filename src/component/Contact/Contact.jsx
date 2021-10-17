import React, { Component } from 'react'
import style from './Contact.module.css'
import $ from 'jquery'

export default class Contact extends Component {

    componentDidMount() {
        focusInput();
        keyupInput();
        keyupEmail();
        alertClose();
        sendButton();

        function sendButton() {
            let formBtn = document.getElementById('formBtn');
            formBtn.addEventListener('click', function () {
                sendData();
            });
        }

        function sendData() {
            let name = document.getElementById('nameInp');
            let email = document.getElementById('emailInp');
            let phone = document.getElementById('phoneInp');
            let message = document.getElementById('messageInp');
            if (name.value == "") {
                $('#name').removeClass('d-none');
                $('#name').addClass('d-block');
            }
            if (email.value == "") {
                $('#email-address').removeClass('d-none');
                $('#email-address').addClass('d-block');
            }
            if (phone.value == "") {
                $('#phone-number').removeClass('d-none');
                $('#phone-number').addClass('d-block');
            }
            if (message.value == "") {
                $('#message').removeClass('d-none');
                $('#message').addClass('d-block');
            }
            if (name.value != "" && email.value != "" && phone.value != "" && message.value != "") {
                alertMessage(name.value);
                clearInput();
            }
            function clearInput() {
                name.value = "";
                email.value = "";
                phone.value = "";
                message.value = ""
            }
        }


        function focusInput() {
            $(".form-control").on("focus", function () {
                let target = $(this).attr('target');
                $(`.${target}`).css("color", "rgb(26, 188, 156)");
                $(`#${target}`).removeClass('d-block');
                $(`#${target}`).addClass('d-none');
                console.log(target);
            });
            $(".form-control").on("blur", function () {
                let target = $(this).attr('target');
                $(`.${target}`).css("color", "black");
            });
        }

        function keyupInput() {
            $(".form-control").on("keyup", function () {
                let target = $(this).attr('target');
                $(`.${target}`).show();
                $(`.${target}`).css("color", "rgb(26, 188, 156)");
                if ($(this).val() == "") {
                    $(`.${target}`).hide();
                }
            });
        }

        function keyupEmail() {
            let email = document.getElementById('emailInp');
            $("#emailInp").on("keyup", function () {
                if (regexEmail(email.value) == false) {
                    $("#email-valid").removeClass('d-none');
                    $("#email-valid").addClass('d-block');
                }
                else {
                    $("#email-valid").removeClass('d-block');
                    $("#email-valid").addClass('d-none');
                }
            });
        }

        function regexEmail(email) {
            let regex = /^[a-zA-z0-9]{1,}[@][a-zA-Z]{1,}[.][a-zA-Z]{2,3}$/;
            if (regex.test(email)) {
                return true;
            }

            else {
                return false;
            }
        }

        function alertMessage(name) {
            $('.alert').removeClass('d-none');
            $('.alert').addClass('d-block');
            $('.alertText').html(`Sorry ${name} , it seems that my mail server is not responding. Please try again later!`)
            $(".alert-close").css("cursor", "pointer")
        }
        function alertClose() {
            $(".alert-close").on('click', () => {
                $('.alert').removeClass('d-block');
                $('.alert').addClass('d-none');
            });
        }

    }

    render() {


        return (
            <>
                <section id="contact" className={`${style.contact}`}>

                    <div className={`container ${style.container}`}>
                        <h2 className="text-center mb-3">CONTACT ME</h2>
                        <div className={`${style.divLine} mb-4 text-center`}>
                            <i className="fas fa-star fs-2 " ></i>
                        </div>

                        <div className="col-9 m-auto">
                            <form action="" className={`${style.form}`}>
                                <label className={`name ${style.name}`}>Name</label>
                                <input id="nameInp" type="text" className="form-control border-0" placeholder="Name" target="name" />
                                <ul id="name" className=" d-none ms-4"><li className="text-danger">Please enter your name.</li></ul>
                                <div className={`${style.divHr}`}></div>

                                <label className={`email-address ${style.name}`}>Email Address</label>
                                <input id="emailInp" type="email" className="form-control border-0" placeholder="Email Address" target="email-address" />
                                <ul id="email-address" className=" d-none ms-4 "><li className="text-danger">Please enter your email address.</li></ul>
                                <ul id="email-valid" className=" d-none ms-4 "><li className="text-danger">Not a valid email address.</li></ul>
                                <div className={`${style.divHr}`}></div>

                                <label className={`phone-number ${style.name}`}>Phone Number</label>
                                <input id="phoneInp" type="telephone" className="form-control border-0" placeholder="Phone Number" target="phone-number" />
                                <ul id="phone-number" className=" d-none ms-4"><li className="text-danger">Please enter your phone number.</li></ul>
                                <div className={`${style.divHr}`}></div>

                                <label className={`message ${style.name}`}>Message</label>
                                <textarea id="messageInp" className="form-control border-0" placeholder="Message" cols="5" rows="5" target="message"></textarea>
                                <ul id="message" className=" d-none ms-4"><li className="text-danger">Please enter a message.</li></ul>
                                <div className={`${style.divHr}`}></div>
                                <div className=" alert alert-danger my-3 d-none">
                                    <div className="d-flex justify-content-between">
                                        <p className="alertText m-0 p-0 alert-danger fw-bold"></p>
                                        <i className="fas fa-times alert-danger alert-close"></i>
                                    </div>
                                </div>
                                <button id="formBtn" type="button" className={` rounded-3 border-0  text-white ${style.formBtn}`} >Send</button>

                            </form>
                        </div>

                    </div>
                </section>
            </>
        )
    }
}
