export const Contact = () => {
  return (
    <section>
      <h2>Contáctame</h2>
      <h3>
        ¿Tienes un proyecto en mente? Hablemos sobre cómo podemos trabajar
        juntos
      </h3>

      <div className="contact-info">
        <h2>Información de Contacto</h2>
        <p>No dudes en contactarme para discutir los requisitos de tu proyecto o cualquier pregunta que puedas tener.</p>

        <ul>
            <li>
                <div className="contact-info-list">
                    <span>icon correo</span>
                    <span>
                        Email
                        <strong>contacot@contacto.com</strong>
                    </span>
                </div>
            </li>
            <li>
                <div className="contact-info-list">
                    <span>icon map</span>
                    <span>
                    Ubicación
                        <strong>CABA, Argentina</strong>
                    </span>
                </div>
            </li>
        </ul>
      </div>
      <div className="form-contact">
        <form action="">
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

          <div className="forn element">
            <span>
              <label htmlFor="mensaje">Tu mensaje</label>
              <textarea name="" id="mensaje"></textarea>
            </span>
          </div>
          <button >Enviar Mensaje</button>
        </form>
      </div>
    </section>
  );
};
