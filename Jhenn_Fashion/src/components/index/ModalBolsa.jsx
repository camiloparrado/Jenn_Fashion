import { useState } from "react";

export const ModalBolsa = () => {
  const [quantity, setQuantity] = useState(1);
  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  };
  const handleIncrement = () => {
    setQuantity(quantity + 1)
  };

  const handlerInputBlur = (e) => {
    if (e.target.value === '' || e.target.value === '0') {
      setQuantity(1)
    }
  };

  return (
    <>
      <div className="modal fade " id="bolsa-modal" tabIndex="-1" aria-labelledby="modalTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-descripcion-product">
          <div className="modal-content">
            <div className="modal-header heder-bolsa">
              <h5 className="modal-title" id="modalTitle">Tu carrito</h5>
              <svg className='cerrar-modal-bolsa' id="Flat" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" data-bs-dismiss="modal" aria-label="Close">
                <path d="M202.82861,197.17188a3.99991,3.99991,0,1,1-5.65722,5.65624L128,133.65723,58.82861,202.82812a3.99991,3.99991,0,0,1-5.65722-5.65624L122.343,128,53.17139,58.82812a3.99991,3.99991,0,0,1,5.65722-5.65624L128,122.34277l69.17139-69.17089a3.99991,3.99991,0,0,1,5.65722,5.65624L133.657,128Z" />
              </svg>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-12 col-lg-8 content-producto-bolsa">
                  <div>
                    <div className="row descripcion-product-bolsa">
                      <div className="img-bolsa col-3 col-md-2">
                        <img src="/src/assets/img/1.png" alt="" />
                      </div>
                      <div className="info-bolsa col-6 col-md-7">
                        <h4>ENTERO 1306 COPA REALCE ROMERO</h4>
                        <div className="talla-product-bolsa">
                          <span>L</span>
                        </div>
                        <span className='precio-product-bolsa'>$150.000</span>
                      </div>
                      <div className="accion-bolsa col-3">
                        <div className="d-flex flex-wrap flex-sm-nowrap  align-items-center justify-content-center justify-content-sm-between">
                          <div className="text-center cantidad">
                            <div className="control">
                              <span className="menos" onClick={handleDecrement}></span>
                              <input type="number" value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value))} onBlur={handlerInputBlur} />
                              <span className="mas" onClick={handleIncrement}></span>
                            </div>
                          </div>
                          <div className="remover-producto-bolsa mx-2">
                            <i className="fa-solid fa-xmark"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div className="row descripcion-product-bolsa">
                      <div className="img-bolsa col-3 col-md-2">
                        <img src="/src/assets/img/13.png" alt="" />
                      </div>
                      <div className="info-bolsa col-6 col-md-7">
                        <h4>COPA 7043 REALCE JACINTO</h4>
                        <div className="talla-product-bolsa">
                          <span>L</span>
                        </div>
                        <span className='precio-product-bolsa'>$150.000</span>
                      </div>
                      <div className="accion-bolsa col-3">
                        <div className="d-flex flex-wrap flex-sm-nowrap  align-items-center justify-content-center justify-content-sm-between">
                          <div className="text-center cantidad">
                            <div className="control">
                              <span className="menos" onClick={handleDecrement}></span>
                              <input type="number" value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value))} onBlur={handlerInputBlur} />
                              <span className="mas" onClick={handleIncrement}></span>
                            </div>
                          </div>
                          <div className="remover-producto-bolsa mx-2">
                            <i className="fa-solid fa-xmark"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-4">
                  <div className="subtotal-productos">
                    <table className="table-subtotal">
                      <tbody>
                        <tr>
                          <th scope="row" className="subtotal-bolsa">Subtotal: </th>
                          <td>
                            <span className="precio-subtotal">$150.000</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <p className="texto-informacion">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <hr className="mt-1 mb-2" />
                    <div className="info-agregar-2">
                      <span>Finalizar Compra</span>
                    </div>
                  </div>

                </div>
              </div>
            </div>
            <div className="modal-footer footer-bolsa">
              <div className="row justify-content-center">
                <div className="col-12 col-md-10 col-lg-6"></div>
                <div className="col-12 col-lg-6">
                  <div className="row justify-content-end justify-content-md-center justify-content-lg-end">
                    <div className="col-12 col-none-6 col-sm-auto">
                      <div className="btn-seguir-comprando" data-bs-dismiss="modal" aria-label="Close">Seguir Comprando</div>
                    </div>
                    <div className="col-12 col-none-6 col-sm-auto">
                      <div className="btn-ir-carrito">Ir al carrito</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
