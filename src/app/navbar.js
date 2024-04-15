import React from 'react';
import styles from "./navbar.scss";
import "../app/page"
import skills from "../app/skill"

const Page = () => (
    
  <div>
    <div className="wrapper">
      <nav className="nav__wrapper" id="navbar-example">
        <ul className="nav">
          <li role="presentation" >
            <a href="/">
              <span className="nav__counter">01</span>
             
             
            </a>
          </li>
          <li role="presentation">
            <a href=".page2">
              <span className="nav__counter">02</span>
             
             
            </a>
          </li>
          <li role="presentation">
            <a href="#section3">
              <span className="nav__counter">03</span>
             
            </a>
          </li>
          <li role="presentation">
            <a href="/skil">
              <span className="nav__counter">04</span>
             
            </a>
          </li>
          <li role="presentation">
            <a href="#section5">
              <span className="nav__counter">05</span>
             
             
            </a>
          </li>
        
        </ul>
      </nav>

      
    </div>
  </div>
);


export default Page;
