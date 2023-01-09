import React from "react";
import { Form } from "../COMPONENTS/Form";
import "../assets/CSS/home.css";
import { Cards } from "../COMPONENTS/Cards";

export const Home = () => {
  return (
    <>
      <div className="home">
        <div className="left">
          <h2>Instituto </h2>
          <h1>Emmi Pikler</h1>
          <p>
            Te ayudamos a comprender y acompañar de manera respetuosa el
            desarrollo motor, cognitivo y emocional de tus niños.
          </p>
          {/* <img src={logo} className="brand-logo" alt="logo" /> */}

          <div className="botones">
            <button className="call-to-action">
              ¡Comunícate con nosotros!
            </button>
          </div>
        </div>

        <div className="right">
          <img
            className="fotos"
            src="https://www.teachearlyyears.com/images/uploads/article/The_Pikler_Approach_Part_2.jpg"
          />
        </div>
        <br />
      </div>

      <Cards />

      

      <Form />
    </>
  );
};
