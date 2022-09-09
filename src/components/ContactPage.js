import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './ContactPage.css';

function ContactPage() {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);



    return (
        <div className="contacts-container">
            <div className="contact-items">
                <div className="item-link">
                    <a href="https://www.linkedin.com/in/christopher-eliason/" target="_blank" alt="linkedin link"><i className="fa-brands fa-linkedin"></i></a>
                </div>
                <div className="item-link">
                    <a href="https://github.com/nosaile" target="_blank" alt="github link"><i className="fa-brands fa-square-github"></i></a>
                </div>
                <div className="item-link">
                    <a href="mailto: eliason.chris1@gmail.com" target="_blank" alt="email link"><i className="fa-sharp fa-solid fa-envelope"></i></a>
                </div>
            </div>
            <div className="function-call">
              <Link to="/about" className='func'><h1>whoIsChrisEliason();</h1></Link>
            </div>
        </div>
    )
}

export default ContactPage