// Updated React component (Header.js)

import React, { useState } from "react";
import "./header.css";
import { nav } from "../../data/Data";
import { Link } from "react-router-dom";
import { Dropdown } from 'react-bootstrap';
/* index.css or any other main styles file */
import 'bootstrap/dist/css/bootstrap.min.css';


const Header = () => {
  const [navList, setNavList] = useState(false);

  return (
    <>
      <header>
        <div className='container flex'>
          <div className='logo'>
            <h1>IndiaLand</h1>
          </div>
          <div className='nav'>
            <ul className={navList ? "small" : "flex"}>
              <li style={{marginRight:'0px'}}>
                <a  href='/'style={{color:'black'}}>Home</a>
              </li>
              <li style={{marginRight:'26px', color:'black'}}>
                <a href='/contact' style={{color:'black'}}>contact</a>
              </li>
              <li>
                {/* Bootstrap Dropdown for Projects */}
                <Dropdown style={{marginRight:'12px', color:'black'}}>
                  <Dropdown.Toggle variant="light"  style={{backgroundColor:"white"}} id="dropdown-basic">
                    About
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="/about">About IndiaLand</Dropdown.Item>
                    <Dropdown.Item href="/leadership">Leadership</Dropdown.Item>
                    <Dropdown.Item href="/Chairman corner">Chairman's corner</Dropdown.Item>

                    {/* Add more project links as needed */}
                  </Dropdown.Menu>
                </Dropdown>
              </li>
              <li>
                {/* Bootstrap Dropdown for Projects */}
                <Dropdown style={{marginRight:'12px', color:'black'}}>
                  <Dropdown.Toggle  id="dropdown-basic"  variant="light" style={{backgroundColor:"white"}}>
                    Projects
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="/Hinjewadi">Hinjewadi</Dropdown.Item>
                    <Dropdown.Item href="/Chennai">Chennai</Dropdown.Item>
                    <Dropdown.Item href="/Coimbatore">Coimbatore</Dropdown.Item>

                    {/* Add more project links as needed */}
                  </Dropdown.Menu>
                </Dropdown>
              </li>
             
            </ul>
          </div>
          <div className='button flex'>
           
          </div>
          <div className='toggle'>
            <button onClick={() => setNavList(!navList)}>
              {navList ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
