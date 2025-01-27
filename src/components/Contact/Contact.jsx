import React from 'react'
import './Contact.css';
import msg_icon from '../../assets/msg.png'
import cont_icon from '../../assets/Cont.png'
import call_icon from '../../assets/call.png'
import loc_icon from '../../assets/loc.png'
import next_icon from '../../assets/icons8-back-48.png';

const Contact = () => {
        const [result, setResult] = React.useState("");
      
        const onSubmit = async (event) => {
          event.preventDefault();
          setResult("Sending....");
          const formData = new FormData(event.target);
      
          formData.append("access_key", "a47da11e-994b-443e-8f0d-ca240035dfb4");
      
          const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
          });
      
          const data = await response.json();
      
          if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
          } else {
            console.log("Error", data);
            setResult(data.message);
          }
        };
  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message<img src={msg_icon} alt=''/></h3>
        <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our Cafe!</p>
        <ul>
            <li><img src={cont_icon} alt=""/>Contact@brewzy.com</li>
            <li><img src={call_icon} alt=""/>+1 123-456-7890</li>
            <li><img src={loc_icon} alt=""/>Brewzy Cafe, 1st Cross Road,<br/>2nd Street<br/>New York City</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type="text" name='name' placeholder='Enter Your Name' required/>
            <label>Phone Number</label>
            <input type="tel" name='phone' placeHolder="Enter Your Mobile Number" required/>
            <label>Write your Message here</label>
            <textarea name="message" rows="6" placeHolder="Your Message Here Please..." required></textarea>
            <button type='submit' className="btn">Submit<img src={next_icon} alt=""/></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
