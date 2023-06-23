export const Footer = () => {
  return (
    <>
      <footer>
        <div className="container-fluid footer">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-3 content-footer">
              <div className="footer__title">
                <h3>SOBRE NOSOTROS</h3>
              </div>
              <div className="footer__content">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 content-footer">
              <div className="footer__title">
                <h3>CONTACTO</h3>
              </div>
              <div className="footer__content">
                <p>
                  <i className="fas fa-map-marker-alt"></i> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                </p>
                <p>
                  <i className="fa-brands fa-whatsapp"></i> <a href="">+57 3112428572</a> 
                </p>
                <p>
                  <i className="fas fa-envelope"></i> {" "}
                  <a href="mailto:jenfashioncol@gmail.com">jennfashioncol@gmail.com</a>
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 content-footer encuentranos">
              <div className="footer__title">
                <h3>ENCUENTRANOS EN</h3>
              </div>
              <div className="footer__content ">
                <div className="footer__social">
                  <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 content-footer">
              <div className="footer__title">
                <h3>ENLACES</h3>
              </div>
              <div className="footer__content">
                <ul>
                  <li>
                    <a href="#">Inicio</a>
                  </li>
                  <li>
                    <a href="#">Tienda</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-12 text-center">
              <p className="copy">
                &copy; 2023 <span>Jenn Fashion</span> | Todos los derechos reservados
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
