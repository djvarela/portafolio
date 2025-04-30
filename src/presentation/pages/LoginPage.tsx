import "../../../public/assets/css/normalize.css"

import "../../../public/assets/css/styles.css"

export const LoginPage = () => {
  return (
    <>
      <title>Login</title>


      <section className="loginPage">



        <form action="" autoComplete="off">
          <h2>Portafolio <br/> Iniciar sesion</h2>
          <span>
            <label htmlFor="Email">Email:</label>
            <input type="text" name="email" />
          </span>
          <span>
            <label htmlFor="password">Password:</label>
            <input type="text" name="password" />
          </span>

          <button type="submit">INGRESAR</button>

        </form>

      </section>


    </>
  )
}
