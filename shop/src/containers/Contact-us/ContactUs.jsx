import React,  { useRef } from 'react';
import emailjs from '@emailjs/browser';
// import { Send } from '../../components/Send/Send';

import "./ContactUs.css"

function ContactUs() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ya43oes', 'template_dwkg35g', form.current, 'F4W3EOTn9sBL3851q')
        .then((result) => {
            alert("Tu mensaje fue enviado exitosamente, pronto me contactaré contigo :)")
            window.location.reload()
        }, (error) => {
            console.log(error.text);
        });
    }

    return(
        <>
            <div className="headerFormContainerPc">
                <label className="headerFormPc">Let's Talk:</label>
            </div>
            <div className="formContainer">
                <form ref={form} onSubmit={sendEmail} className='form'>
                    <div className="headerFormContainer">
                        <label className="headerForm">Let's Talk:</label>
                    </div>
                    <div className='inputsForm'>
                        <input id="name" type="text" name="user_name" autoComplete='off' placeholder='Full Name'/>
                        <input id="email" type="email" name="user_email" autoComplete='off' placeholder='Your Email'/>
                    </div>
                    <textarea id="message" name="message" placeholder='Your interests are important, write your message:'></textarea>
                    <div className="bSubmitContainer">
                        <input className="iSubmit" type="submit" value="Send" />
                    </div>
                </form>
            </div>
        </>
    )
}

export {ContactUs}