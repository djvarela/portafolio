export const AboutMe = () => {
  return (
    <section className="aboutMe">
      <h2>Sobre Mí</h2>
      <h3>
        Un desarrollador full-stack apasionado, especializado en SEO y
        soluciones empresariales
      </h3>

      <div className="aboutMe-contentainer">


        <div className="aboutMe-info">
          <h4>Trayectoria Profesional</h4>
          <p>
            Con más de 8 años de experiencia en desarrollo full-stack, me he
            enfocado en crear aplicaciones empresariales robustas con énfasis en
            SEO, sistemas CRM y soluciones ERP para la gestión de recursos humanos</p>
          <p>
            Mi pasión está en construir software escalable que impulse el
            crecimiento empresarial y mejore la eficiencia operativa. Combino
            experiencia técnica con conocimiento comercial para ofrecer soluciones
            que realmente generen impacto
          </p>

          <a href="#contacto" className="button-primary">Contactame</a>

        </div>
        <div className="experience">

          <ul>
            <li>
              <div className="icon-experience" style={{ background: "" }}>
                <img src="/images/soft.svg" alt="icon" width="30" />
              </div>
              <div className="info-experience">
                <h2>Desarrollador Lead Full-Stack</h2>
                <h3>Enterprise Solutions Inc. (2020 - Presente)</h3>
                <p>Liderando el desarrollo de aplicaciones empresariales optimizadas para SEO</p>
              </div>
            </li>
          </ul>
        </div>

      </div>

    </section>
  );
};
