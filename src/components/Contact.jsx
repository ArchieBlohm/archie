import React from 'react'
import Leftnav from './Leftnav'
import Rightnav from './Rightnav'
import Footer from './Footer';
import emailjs from '@emailjs/browser';


function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();

    const service_ID = 'service_o89g1dp';
    const template_ID = 'template_ducgoll';
    const public_key = 'tENO-nYjJTAJJELU4';
    //
    const from_name =  document.getElementById("name").value;
    const email_id = document.getElementById("email").value;
    const message =    document.getElementById("message").value;

    const values = {
      'to_name': "Archie",
      'from_name': from_name,
      'email_id': email_id,
      'message': message
    };


    emailjs.send(service_ID, template_ID, values, public_key)
      .then((result) => {
          console.log("Email is sent:", result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <>
    <Leftnav/>
    <Rightnav/>
    <div className="contents2">
      <div className="containter">
        <form className="formContainer" onSubmit={sendEmail}>
          <h3> Get in touch</h3>
          <input type="text" id="name" placeholder='Your name' required/>
          <input type="email" id="email" placeholder='Email id' required/>
          <textarea id="message" rows="4" placeholder='Your Message'></textarea>
          <input type="submit" id="button" value="Send Email"/>
        </form>
      </div>
    
    </div>
    <Footer/>
    
    </>
  )
}

export default Contact