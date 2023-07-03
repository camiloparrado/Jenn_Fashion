import { useState } from "react";
import { CSSTransition } from 'react-transition-group';

export const NosotrasTops = () => {

  const [selectedVariant, setSelectedVariant] = useState('S');
  const [isHovered, setIsHovered] = useState(false);

  const handleVariantClick = (variant) => {
    setSelectedVariant(variant);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
     <div className="cont-box">
      <h1 className="tittle-products">Tops</h1>
      <div className="row row-shop row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 p-3">
        <div className="col col-shop">
          <div className="card card-wrapper-shop h-100"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}

          >
            <div className="img-wrapper img-wrapper-shop">
              <CSSTransition
                in={!isHovered}
                timeout={1000}
                classNames="fade"
                unmountOnExit
              >
                <img src="/src/assets/img/1.png" alt="..." className="img-fade card-img-top" data-bs-toggle="modal" data-bs-target="#modalExample" />{/*aqui onclick para enviar informacion que se muestra en el modal */}
              </CSSTransition>
              <CSSTransition
                in={isHovered}
                timeout={1000}
                classNames="fade"
                unmountOnExit
              >
                <img src="/src/assets/img/8.png" alt="..." className="img-fade card-img-top" data-bs-toggle="modal" data-bs-target="#modalExample" />{/*aqui onclick para enviar informacion que se muestra en el modal */}
              </CSSTransition>

              <div className="cont-ver-pro show d-lg-none">
                <div className="ver-producto">
                  <i className="fa-sharp fa-solid fa-eye" data-bs-toggle="modal" data-bs-target="#modalExample"></i>{/*aqui onclick para enviar informacion que se muestra en el modal */}
                </div>

              </div>

              <div className="agregar-carrito show d-lg-none">
                <div className="info-agregar">
                  <svg className='carrito-añadir' height="30" viewBox="0 0 30 30" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 17h14c.278 0 .5.223.5.5s-.222.5-.5.5h-14c-.276 0-.5-.223-.5-.5s.224-.5.5-.5zm-1-4h16c.278 0 .5.223.5.5s-.222.5-.5.5h-16c-.276 0-.5-.223-.5-.5s.224-.5.5-.5zm-9-8c-.653 0-.67 1 0 1h3.6c.078.346.64 2.81 1.312 5.736.717 3.126 1.452 7.32 1.606 7.893.132.494.255 1.055.62 1.544.362.488 1 .826 1.862.826h16c.86 0 1.5-.338 1.863-.826.364-.49.487-1.05.62-1.545.265-.993 1.62-6.944 1.89-7.952.152-.566.202-1.156.022-1.69-.18-.534-.72-.988-1.395-.988h-20c-.653 0-.66 1 0 1h20c.325 0 .366.07.447.31.08.238.076.674-.04 1.108-.267.992-1.62 6.945-1.89 7.953-.135.506-.262.945-.456 1.206-.194.262-.42.424-1.06.424h-16c-.64 0-.866-.162-1.06-.424-.195-.26-.322-.7-.458-1.205-.114-.426-.88-4.732-1.595-7.856-.717-3.125-1.4-6.125-1.4-6.125C4.938 5.16 4.735 5 4.5 5zm23 18c-1.373 0-2.5 1.125-2.5 2.5s1.127 2.5 2.5 2.5c1.376 0 2.5-1.125 2.5-2.5S24.877 23 23.5 23zm0 1c.836 0 1.5.666 1.5 1.5s-.664 1.5-1.5 1.5c-.833 0-1.5-.666-1.5-1.5s.667-1.5 1.5-1.5zm-12-1C10.128 23 9 24.125 9 25.5s1.127 2.5 2.5 2.5c1.376 0 2.5-1.125 2.5-2.5S12.877 23 11.5 23zm0 1c.836 0 1.5.666 1.5 1.5s-.664 1.5-1.5 1.5c-.833 0-1.5-.666-1.5-1.5s.667-1.5 1.5-1.5z" /></svg>
                  <span>Añadir al carrito</span>
                </div>
              </div>

              <div className={`cont-ver-pro d-none d-lg-flex ${isHovered ? 'show' : ''}`}>
                <div className="ver-producto" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-original-title="Vista Previa">
                  <i className="fa-sharp fa-solid fa-eye" data-bs-toggle="modal" data-bs-target="#modalExample"></i> {/*aqui onclick para enviar informacion que se muestra en el modal */}
                </div>
              </div>

              <div
                className={`agregar-carrito d-none d-lg-flex ${isHovered ? 'show' : ''}`}
              >
                <div className="info-agregar">
                  <svg className='carrito-añadir' height="30" viewBox="0 0 30 30" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 17h14c.278 0 .5.223.5.5s-.222.5-.5.5h-14c-.276 0-.5-.223-.5-.5s.224-.5.5-.5zm-1-4h16c.278 0 .5.223.5.5s-.222.5-.5.5h-16c-.276 0-.5-.223-.5-.5s.224-.5.5-.5zm-9-8c-.653 0-.67 1 0 1h3.6c.078.346.64 2.81 1.312 5.736.717 3.126 1.452 7.32 1.606 7.893.132.494.255 1.055.62 1.544.362.488 1 .826 1.862.826h16c.86 0 1.5-.338 1.863-.826.364-.49.487-1.05.62-1.545.265-.993 1.62-6.944 1.89-7.952.152-.566.202-1.156.022-1.69-.18-.534-.72-.988-1.395-.988h-20c-.653 0-.66 1 0 1h20c.325 0 .366.07.447.31.08.238.076.674-.04 1.108-.267.992-1.62 6.945-1.89 7.953-.135.506-.262.945-.456 1.206-.194.262-.42.424-1.06.424h-16c-.64 0-.866-.162-1.06-.424-.195-.26-.322-.7-.458-1.205-.114-.426-.88-4.732-1.595-7.856-.717-3.125-1.4-6.125-1.4-6.125C4.938 5.16 4.735 5 4.5 5zm23 18c-1.373 0-2.5 1.125-2.5 2.5s1.127 2.5 2.5 2.5c1.376 0 2.5-1.125 2.5-2.5S24.877 23 23.5 23zm0 1c.836 0 1.5.666 1.5 1.5s-.664 1.5-1.5 1.5c-.833 0-1.5-.666-1.5-1.5s.667-1.5 1.5-1.5zm-12-1C10.128 23 9 24.125 9 25.5s1.127 2.5 2.5 2.5c1.376 0 2.5-1.125 2.5-2.5S12.877 23 11.5 23zm0 1c.836 0 1.5.666 1.5 1.5s-.664 1.5-1.5 1.5c-.833 0-1.5-.666-1.5-1.5s.667-1.5 1.5-1.5z" /></svg>
                  <span>Añadir al carrito</span>
                </div>
              </div>

            </div>
            <div className="card-body card-body-clothes card-body-shop">
              <h2 className="card-title" data-bs-toggle="modal" data-bs-target="#modalExample">ENTERO </h2> {/*aqui onclick para enviar informacion que se muestra en el modal */}
              <p className="card-text">$150.000</p>
              <div className="products-variant">
                <ul className="content-variant-list">
                  <li
                    className={`content-variant-item ${selectedVariant === 'S' ? 'selected' : ''}`}
                    onClick={() => handleVariantClick('S')}

                  >
                    <span className="content-variant-link">S</span>
                  </li>
                  <li
                    className={`content-variant-item ${selectedVariant === 'M' ? 'selected' : ''}`}
                    onClick={() => handleVariantClick('M')}
                  >
                    <span className="content-variant-link">M</span>
                  </li>
                  <li
                    className={`content-variant-item ${selectedVariant === 'L' ? 'selected' : ''}`}
                    onClick={() => handleVariantClick('L')}
                  >
                    <span className="content-variant-link">L</span>
                  </li>
                  <li
                    className={`content-variant-item ${selectedVariant === 'XL' ? 'selected' : ''}`}
                    onClick={() => handleVariantClick('XL')}
                  >
                    <span className="content-variant-link">XL</span>
                  </li>
                </ul>
                <ul className="content-variant-list">
                  <li
                    className={`content-variant-item ${selectedVariant === 'Talla Única' ? 'selected' : ''}`}
                    onClick={() => handleVariantClick('Talla Única')}
                  >
                    <span className="content-variant-link">Talla Única</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div> {/*fin de la tarjeta*/}
      </div>
    </div>
  )
}
