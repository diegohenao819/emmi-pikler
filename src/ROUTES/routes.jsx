import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { Footer } from "../COMPONENTS/Footer";

import { Nav } from "../COMPONENTS/Nav";
import { Home } from "../PAGES/Home";
import { Horarios } from "../PAGES/Horarios";
import { Metodologia } from "../PAGES/Metodologia";
import { Redes } from "../PAGES/Redes";

export const Rutas = () => {
  return (
    <BrowserRouter>
      {/* LAYOUT */}

      <Nav />

      {/* Contenido central y rutas */}

      <section id="content" className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/redes" element={<Redes />} />
          
          <Route path="/metodologia" element={<Metodologia/>} />
          <Route path="/horarios" element={<Horarios/>} />

          <Route
            path="*"
            element={
              <div className="jumbo">
                <h1>Error 404</h1>
              </div>
            }
          />
        </Routes>
      </section>
      <Footer />
    </BrowserRouter>
  );
};
