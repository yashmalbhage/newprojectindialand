import React from "react"
import { footer } from "../../data/Data"
import "./footer.css"

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

              <div className='input flex'>
                <input type='text' placeholder='Email Address' />
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
