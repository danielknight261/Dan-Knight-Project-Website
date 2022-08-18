import "./ContactFormStyles.css"
import React from "react"

const ContactForm= () => {
    return (
    <div className="form">
        <form>
            <label>Your Name</label>
            <input type="text"></input>
            <label>Email</label>
            <input type="email"></input>
            <label>Subject</label>
            <input type="subject"></input>
            <label>Message</label>
            <textarea row="6" placeholder="Type your message here" />
            <button className="button">Submit</button>
            
        </form>
      </div>
    );
  };
  
  export default ContactForm;