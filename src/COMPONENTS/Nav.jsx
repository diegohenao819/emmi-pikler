import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.jpg";
import "../assets/CSS/nav.css";

export const Nav = () => {


  const openToggle = () => {
    const toggle = document.querySelector(".toggle");
    toggle.classList.toggle("active");
  };
  return (
    <div className="navigation">
      <div className="top">
        <nav>
          <div className="div-logo">
            <a href="#" className="brand-logo">
              <img src={logo} alt="logo" />
            </a>
          </div>

          <div className="nav-wrapper">
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <NavLink to="/home">Inicio</NavLink>
              </li>
              <li>
              <NavLink to="/metodologia">Metodología</NavLink>
              </li>

              <li>
              <NavLink to="/horarios">Horarios</NavLink>
              </li>
              <li>
                <NavLink to="/redes"> Redes</NavLink>
              </li>
          
            </ul>
          </div>
        </nav>
        <br />
      </div>

      {/* Toggle menu */}
  


      <i className="fas fa-bars menu" onClick={openToggle}></i>
      <div className="toggle">
       
        
        <div className="menu">
          <ul>
            <li>
              <NavLink to="/home"> Inicio</NavLink>
            </li>
            <li>
              <NavLink to="/redes">Redes</NavLink>
            </li>
            <li>
              <NavLink to="/metodología">Metodología</NavLink>
            </li>
            <li>
              <NavLink to="/horarios">Horarios</NavLink>
            </li>
          
          </ul>
        </div>
       
      </div>
      <div className="div-logo logo-responsive">
            
              <img src={logo} alt="logo" />
           
          </div>
    </div>
  );
};
