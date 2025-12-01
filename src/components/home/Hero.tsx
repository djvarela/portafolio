import { useState } from "react"


export const Hero = () => {
    const [dataBackend, setDataBackend] = useState([])


  
console.log(dataBackend.title)    
  return  (
    <section className="hero">
        <div className="hero-content">
            <div className="info">
                <h2>Nombre</h2>
                <h1><span>{dataBackend}</span> & Especialista SEO</h1>
                <p>
                    Construyendo aplicaciones web potentes con enfoque en optimización
                    SEO y soluciones empresariales como CRM y ERP para gestión de
                    recursos.
                </p>

                <span>
                    <a href="#proyectos" className="button-primary">Ver Proyectos</a>
                    <a href="#contacto" className="button-secondary">Contactame</a>
                </span>
                <p>
                    Especializado en soluciones empresariales y software corporativo
                </p>
            </div>
            <div className="img-container"></div>
        </div>
        <a href="#proyectos" role="button">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
        </a>
    </section>
  )
}
