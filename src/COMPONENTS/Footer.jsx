import React from "react";
import "../assets/CSS/footer.css";

export const Footer = () => {
  return (
    <>
      <footer>
        <div className="nosotros">
          <ul>
            <h1>
              Nosotros <i className="fas fa-regular fa-address-card"></i>
            </h1>
            <p>
              <a href="#">¿Quienes somos?</a>
            </p>
            <p>
              <a href="#">Metodología</a>
            </p>
          </ul>
        </div>

        <div className="contacto">
          <ul>
            <h1>
              Contáctenos <i className="fas fa-solid fa-phone"></i>
            </h1>
            <p> Celular: +57 312 2113961</p>
            <p>Correo: vtcastro@utp.edu.co</p>
            <p>WhatsApp: +57 312 2113961</p>
          </ul>
        </div>

        <div className="horario">
          <ul>
            <h1>
              Horarios <i className="fas fa-solid fa-business-time"></i>
            </h1>
            <p>Lunes a Viernes</p>
            <p>Sábados</p>
            <p>Domingos</p>
          </ul>
        </div>

        <div className="redes">
          <ul>
            <h1>
              Redes <i className="fas fa-regular fa-globe"></i>
            </h1>
            <p>
              <a href="#">Instagram</a>
            </p>
            <p>
              <a href="#"> Facebook</a>
            </p>
          </ul>
        </div>
      </footer>
    </>
  );
};
