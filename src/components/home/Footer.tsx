

export const Footer = () => {

  let year = new Date;


  return (
    <footer className="footer">


      <div className="info">
        <h2>Diego Varela</h2>
        <p>Desarrollo full-stack con enfoque en optimización SEO y soluciones empresariales.</p>

        <ul>
          <li><a href="https://github.com/djvarela" target="_blank" rel="noopener noreferrer"><img src="/images/github-black.svg" width="25" alt="github icon" /></a></li>
          <li><a href="https://www.linkedin.com/in/djvarela/" title="ver perfil de Linkedin" target="_blank" rel="noopener noreferrer"><img src="/images/linkedin.svg" width="25" alt="linkedin icon" /></a></li>
          <li><a href="mailto:contacto@diegovarela.dev"  ><img src="/images/email-black.svg" width="30" alt="" /></a></li>
        </ul>
      </div>

      <div className="copy">
        <h2>© {year.getFullYear()} Diego Varela. Todos los derechos reservados.</h2>
        <h3>Diseñado y desarrollado con pasión y atención a las mejores prácticas de SEO.</h3>
      </div>







    </footer>
  )
}
