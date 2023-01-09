import React from "react";
import "../assets/CSS/cards.css";

export const Cards = () => {
  return (
    <div className="top-cards">
      <div className="cards">
        <div className="card">
          <img
            src="https://crianzafelizyconsciente.com/wp-content/uploads/2019/08/descarga.png"
            alt="card"
          />
          <div className="card-body">
            <h3>Card 1</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quae.
            </p>
          </div>
        </div>
        <div className="card">
          <img
            src="https://d2lcsjo4hzzyvz.cloudfront.net/blog/wp-content/uploads/2020/09/nin%CC%83a-feliz-con-crianza-respetuosa.jpg"
            alt="card"
          />
          <div className="card-body">
            <h3>Card 2</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quae.
            </p>
          </div>
        </div>
        <div className="card">
          <img
            src="https://attachmentparenting.co.uk/wp-content/uploads/2018/03/Screenshot-2018-02-27-10.16.51.png"
            alt="card"
          />
          <div className="card-body">
            <h3>Card 3</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quae.
            </p>
          </div>
        
        </div>
        
      </div>
    </div>
  );
};
