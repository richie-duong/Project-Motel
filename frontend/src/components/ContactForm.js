import React from 'react'

export default function ContactForm() {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>Have any questions or concerns? Let us know down in the form below, or call us at 123-123-1234!</p>
      <form id="contact-form" onSubmit="" method="POST">
        <input type='text' id='name' name='name' placeholder='Full Name'></input><br/>
        <input type='text' id='phone' name='phone' placeholder='Phone Number'></input>
        <input type='text' id='email' name='email' placeholder='Email Address'></input><br/>
        <input type='text' id='subject' name='subject' placeholder='Subject'></input><br/>
        <textarea id='contactMsg' name= 'contactMsg' rows="4" cols="50" placeholder='Message'></textarea><br/>
        <input type='submit' value='Submit'></input>
      </form>
    </div>
  )
}
