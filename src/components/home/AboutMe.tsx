export const AboutMe = () => {
  return (
    <section className="aboutMe" id="sobremi">
      <h2>Sobre Mí</h2>
      <h3>
        Un desarrollador full-stack apasionado, especializado en SEO y
        soluciones empresariales
      </h3>

      <div className="aboutMe-contentainer">


        <div className="aboutMe-info">
          <h4>Trayectoria Profesional</h4>
          <p>
            Cuento con 3 años de experiencia desarrollando plataformas, aplicaciones y sitios web, con un enfoque en la digitalización de recursos y automatización de procesos. Desde mis inicios, me ha tocado liderar la creación de sistemas de gestión de RRHH y ERP personalizados, logrando optimizar operaciones y reducir costos, además de contribuir a la sostenibilidad eliminando el uso innecesario de papel.
           
          </p>
          <h5>Lo que hago:</h5>
          <ul>
            <li>Desarrollo de soluciones a medida para mejorar la eficiencia.</li>
            <li>Implementación de plataformas escalables y optimizadas.</li>
            <li>Transformación digital y automatización de procesos empresariales.</li>
            <li>Aprendizaje continuo y adaptación a nuevas tecnologías.</li>
          </ul>

          <h5>Formación y actualización constante</h5>

          <p>Estudio la Licenciatura en Ciencias de la Computación en la UBA y complemento mi formación con documentación, cursos y libros. Me interesa estar siempre actualizado en tecnologías, metodologías y tendencias del sector para desarrollar soluciones más eficientes y escalables.</p>

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

    </section >
  );
};
