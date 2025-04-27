export const Contact = () => {
  return (
    <section className="contact" id="contacto">
      <h2>Contáctame</h2>
      <h3>¿Tienes un proyecto en mente? Hablemos sobre cómo podemos trabajar juntos</h3>

      <div className="contact-container">
        <div className="contact-info">
          <h2>Información de Contacto</h2>
          <p>No dudes en contactarme para discutir los requisitos de tu proyecto o cualquier pregunta que puedas tener.</p>

          <ul>
            <li>
              <span>
                <img src="/images/email.svg" alt="email icon" width='35' />
              </span>
              <span>
                Email <br />
                <strong>contacot@contacto.com</strong>
              </span>
            </li>
            <li>
              <span>
                <img src="/images/maps.svg" alt="maps icons" width='35' />
              </span>
              <span>
                Ubicación <br />
                <strong>CABA, Argentina</strong>
              </span>

            </li>
          </ul>
        </div>
        <div className="form-contact">
          <form action="" autoComplete="off">
            <div className="form-element">
              <span>
                <label htmlFor="tu-nombre">Tu nombre</label>
                <input type="text" id="tu-nombre" />
              </span>

              <span>
                <label htmlFor="tu-email">Tu Email</label>
                <input type="email" id="tu-email" />
              </span>
            </div>

            <div className="form-element">
              <span>
                <label htmlFor="asunto">Asunto</label>
                <input type="text" id="asunto" />
              </span>
            </div>

            <div className="form-element">
              <span>
                <label htmlFor="mensaje">Tu mensaje</label>
                <textarea name="" id="mensaje" rows={10}></textarea>
              </span>
            </div>
            <div className="form-element">

              <button className="button-primary">Enviar Mensaje</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
