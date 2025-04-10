import { useEffect, useState } from "react";

export const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        setScrolled(window.scrollY > 80);
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
              <a href="">Proyectos</a>
            </li>
            <li>
              <a href="">Sobre Mí</a>
            </li>
            <li>
              <a href="">Habilidades</a>
            </li>
            <li>
              <a href="">Contacto</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
