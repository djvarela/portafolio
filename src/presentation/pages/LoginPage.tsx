import { Navigate } from "react-router";
import "../../../public/assets/css/normalize.css"

import "../../../public/assets/css/styles.css"
import { loginUser } from "../../usescases";
import { useState } from "react";

export const LoginPage = () => {

  const [redirect, setRedirect] = useState(false);
  const [emailState, setEmailState] = useState(false)
  const [userState, setUserState] = useState(false)
  const [stateLogin , setStateLogin ] = useState(false);


  const onSubmit = async (e:any) => {
    e.preventDefault();


    if (e.target.email.value == '') {
      return setEmailState(!emailState)
    }
    if (e.target.password.value == '') {
      return setUserState(!userState)
    };

    setEmailState(false)
    setUserState(false)

    const credentials = {
      user: e.target.email.value,
      password: e.target.password.value,
    };


    const { data } = await loginUser(credentials);

    if (data) {
     
      setRedirect(true); // Esto activa el redirect
    }

    setStateLogin(!stateLogin)
  };

  if (redirect) return <Navigate to="/admin" replace />;



  return (
    <>
      <title>Login</title>


      <section className="loginPage">

        <form onSubmit={onSubmit} autoComplete="off">
          <h2>Portafolio <br /> Iniciar sesion</h2>
          <span>
            <label htmlFor="Email">Email:</label>
            <input type="text" name="email" />
            {emailState && (<small>Ingrese el Email</small>)}
          </span>
          <span>
            <label htmlFor="password">Password:</label>
            <input type="text" name="password" />
            {userState && (<small>Ingrese una Contraseña</small>)}

          </span>
          
          { stateLogin && (<small>Contraseña o Email incorrecto</small>)}

          <button type="submit">INGRESAR</button>

        </form>

      </section>


    </>
  )
}
