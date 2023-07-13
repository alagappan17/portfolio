import React from 'react'
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

const SERVICE_ID = "service_bjl57qr";
const TEMPLATE_ID = "template_1mmijew";
const PUBLIC_KEY = "uQ5De-_vJ7S_-vGC9";

const EmailForm = () => {
    const handleOnSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
          .then((result) => {
            console.log(result.text);
            Swal.fire({
              icon: 'success',
              title: 'Message Sent Successfully'
            })
          }, (error) => {
            console.log(error.text);
            Swal.fire({
              icon: 'error',
              title: 'Ooops, something went wrong',
              text: error.text,
            })
          });
        e.target.reset()
      };
    return (
        <form class="formContainer fadeInRight" onSubmit={handleOnSubmit}>
            <h2>Pst Pst..Slide into my DMs. Let's have a chat!</h2>
            <div class="formElement">
                <label for="from_name">Name</label>
                <input type="text" id="from_name" name="from_name" placeholder="Your name.." required />
            </div>

            <div class="formElement">
                <label>E-mail</label>
                <input type="email" id="from_email" name="from_email" placeholder="Your email.." required />
            </div>

            <div class="formElement">
                <label for="message">Message</label>
                <textarea name="message" rows="8" cols="30" placeholder="Your message.." required />
            </div>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default EmailForm