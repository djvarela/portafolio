import { useEffect, useState } from "react";

export const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        setScrolled(window.scrollY > 40);
      };
  
      window.addEventListener('scroll', handleScroll);
  
     
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);


  return (
    <>
      <header className={scrolled ? "scrollHeader" : ""}>
        <h2>Diego V</h2>
        <nav>
          <ul>
            <li>
              <a href="">Inicio</a>
            </li>
            <li>
              <a href="#proyectos">Proyectos</a>
            </li>
            <li>
              <a href="#sobremi">Sobre Mí</a>
            </li>
            <li>
              <a href="#habilidades">Habilidades</a>
            </li>
            <li>
              <a href="#contacto">Contacto</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
