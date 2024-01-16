import React from "react"
import { footer } from "../../data/Data"
import "./footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faYoutube, faFacebook } from '@fortawesome/free-solid-svg-icons';

import { FaInstagram, FaTwitter, FaYoutube, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
     

      <footer>
        <div className='container'>
          <div className='box'>
            <div className='logo'>
              {/* <img src='../images/logo-light.png' alt='' /> */}
              IndiaLand
              {/* <h2>Do You Need Help With Anything?</h2> 
              <p>Receive updates, hot deals, tutorials, discounts sent straignt in your inbox every month</p> */}

              <div className='input'>
                <input type="text" placeholder="Email" />
                <br></br>
                <br></br>

                <button classsName="btn4">Subscribe</button>
              </div>
            </div>
          </div>
          <div className="Box">
            <h3>Get in Touch</h3>
            <ul>
              <li>Indialand Global Tech Park, Hinjawadi, Pune, Maharashtra 411057</li>
              <li>+91 9962 0980 32</li>
              <li> info@indialand.net</li>
            </ul>
          </div>
          <div className="box">
            <h3>Socials</h3>
            <ul>
              <li><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
        <FaInstagram size={32} />
      </a></li>

      <li> <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
        <FaTwitter size={32} />
      </a></li>

      <li><a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
        <FaYoutube size={32} />
      </a></li>
            </ul>
          </div>

          {footer.map((val) => (
            <div className='box'>
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((items) => (
                  <li> {items.list} </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
      <div className='legal'>
        <span>© 2023 IndiaLand Groups.</span>
      </div>
    </>
  )
}

export default Footer
