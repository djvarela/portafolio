export const Projects = () => {
  return (
    <section className="projects" id="proyectos">
      <h2>Proyectos Destacados</h2>
      <h3>
        Mostrando mi trabajo en optimización SEO y soluciones empresariales
      </h3>

      <ul>
        <li>
          <img src="/images/soft.svg" width="30" alt="" />
          <h3>Dashboard SEO Empresarial</h3>
          <p>
            Plataforma integral de análisis SEO con seguimiento de keywords en
            tiempo real, análisis de competencia y funciones de informes
            automatizados.
          </p>
          <ul className="projects-technology">
            <li>Next.js</li>
            <li>SEO</li>
            <li>CSS</li>
          </ul>
          <span className="links">
            <a href="">
              <img src="/images/link-external.svg" width="16px" alt="" />
              Demo</a>
            <a href="">
            <img src="/images/github.svg" width="16px" alt="" />
              
              Código</a>
          </span>
        </li>
        <li>
          <img src="/assets/images/soft.svg" width="30" alt="" />

          <h3>Sistema de Gestión de RRHH</h3>
          <p>
            Solución ERP completa para recursos humanos con seguimiento de
            empleados, gestión de desempeño e integración de nóminas.
          </p>
          <ul className="projects-technology">
            <li>Next.js</li>
            <li>SEO</li>
            <li>CSS</li>
          </ul>
        </li>
        <li>
          <img src="/assets/images/soft.svg" width="30" alt="" />

          <h3>Plataforma CRM</h3>
          <p>
            Sistema CRM avanzado con gestión de pipeline de ventas, segmentación
            de clientes y herramientas de automatización de marketing.
          </p>
          <ul className="projects-technology">
            <li>Next.js</li>
            <li>SEO</li>
            <li>CSS</li>
          </ul>
        </li>
      </ul>
    </section>
  );
};
