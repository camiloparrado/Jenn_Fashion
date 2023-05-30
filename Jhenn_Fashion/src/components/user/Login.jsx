import logo from '../../assets/img/image.png';
export const Login = () => {
  return (
    <>
      <div className="container w-auto mb-3 cont-login rounded" >
        <div className="row align-items-center align-items-stretch">
          <div className="col d-none d-lg-block  col-lg-6  rounded-start-2 cont-img">
            <img src={logo} alt="logo" width={"100%"} height={"100%"} className='rounded-start-2'/>
          </div>
          <div className="col bg-white p-3 col-lg-6  rounded-end">
            <h2 className="fw-bold text-center pt-1 mb-1">Bienvenido</h2>
            <form action="">
              <div className="mb-4">
                <label htmlFor="email" className="form-label">Correo electrónico</label>
                <input type="email" className="form-control" name="email" />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="form-label">Contraseña</label>
                <input type="password" className="form-control" name="password" />
              </div>
              <div className="mb-4 form-check">
                <input type="checkbox" className="form-check-input" name="connected" />
                <label className="form-check-label" htmlFor="connected">Mostrar Contraseña</label>
              </div>
              <div className="d-grid">
                <button type="submit" className="btn btn-primary">Iniciar sesión</button>
              </div>
              <div className="my-3">
                <span><a href="#">Recuperar Contraseña</a></span>
              </div>
            </form>
          </div>
        </div>
      </div>

    </>
  )
}
