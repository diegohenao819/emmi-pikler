import React from "react";
import "../assets/CSS/form.css";

export const Form = () => {
  return (
    // Form to send email
    <div className="meroTop">
      <div className="form">
        <div className="form-container">
          <h1>Contáctanos</h1>
          <form action="https://formspree.io/f/xwkjknjl" method="POST">
            <input type="text" name="name" placeholder="Nombre" required />
            <input type="email" name="email" placeholder="Correo" required />
            <textarea name="message" placeholder="Mensaje" required></textarea>
            <div className="curva"></div>
            <input type="submit" value="Enviar" />
          </form>
        </div>
        <div className="icono">
          <i class="fas fa-solid fa-envelope"></i>
        </div>

        <div className="curva">
        <svg viewBox="0 0 800 500" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" id="blobSvg">
  <g transform="translate(322, 78)">
    <path class="blob" d="M284.5,352Q132,454,146,274Q160,94,298.5,172Q437,250,284.5,352Z" fill="#D8CAA1"></path>
  </g>
  <g transform="translate(-25, -2)">
    <path class="blob" d="M284.5,352Q132,454,146,274Q160,94,298.5,172Q437,250,284.5,352Z" fill="#D8CAA1"></path>
  </g>
</svg>
        </div>
      </div>
    </div>
  );
};
