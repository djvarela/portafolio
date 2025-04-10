import { useState } from "react";
import {
  AboutMe,
  Contact,
  DevelopmentProcess,
  Projects,
} from "../../components";

export const Main = () => {


  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <div className="info">
            <h2>Nombre</h2>
              <h1><span>Desarrollador Full-Stack</span> & Especialista SEO</h1>
            <p>
              Construyendo aplicaciones web potentes con enfoque en optimización
              SEO y soluciones empresariales como CRM y ERP para gestión de
              recursos.
            </p>
       
            <span>
              <a href="" className="button-primary">Ver Proyectos</a>
              <a href="" className="button-secondary">Ver Proyectos</a>
            </span>
            <p>
              Especializado en soluciones empresariales y software corporativo
            </p>
          </div>
          <div className="img-container"></div>
        </div>
        <a href="" role="button">
          --V
        </a>
      </section>

      <Projects />
      <AboutMe />
      <DevelopmentProcess />
      <Contact />
    </main>
  );
};
