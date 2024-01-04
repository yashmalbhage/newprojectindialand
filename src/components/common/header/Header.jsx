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
                <Link to='/'><a style={{color:'black'}}>Home</a></Link>
              </li>
              <li style={{marginRight:'26px', color:'black'}}>
                <Link to='/contact'><a style={{color:'black'}}>contact</a></Link>
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
                    <Dropdown.Item href="/project2">Chairman's corner</Dropdown.Item>

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
            <button className='btn1'>
              <i className='fa fa-sign-out'></i> Know more
            </button>
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
