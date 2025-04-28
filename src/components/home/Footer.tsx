

export const Footer = () => {

  let year = new Date;


  return (
    <footer className="footer">


      <div className="info">
        <h2>Diego Varela</h2>
        <p>Desarrollo full-stack con enfoque en optimización SEO y soluciones empresariales.</p>

        <ul>
          <li>Githutb</li>
          <li>Linkedin</li>
          <li>Email</li>
        </ul>
      </div>

      <div className="copy">
        <h2>© {year.getFullYear()} Diego Varela. Todos los derechos reservados.</h2>
        <h3>Diseñado y desarrollado con pasión y atención a las mejores prácticas de SEO.</h3>
      </div>







    </footer>
  )
}
