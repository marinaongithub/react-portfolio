import React from 'react';
import Footer from '../Footer';

function Contact() {
  return (
    <div className='contact-form d-flex'>
        <form>
        <div className="form-group">
        <label for="inputName">Your name</label>
        <input type="text" className="form-control" id="inputName" placeholder="Enter your name"/>
        </div>
        <div className="form-group">
        <label for="inputEmail">Your email</label>
        <input type="email" className="form-control" id="inputEmail" placeholder="Enter your email"/>
        </div>
        <div className="form-group">
        <label for="inputMessage">Your message</label>
        <textarea type="text" className="form-control" id="inputMessage" placeholder="Enter your message"/>
        </div>
        
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    <Footer/>
  </div>
  )
}

export default Contact