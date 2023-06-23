import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination} from "swiper";
// import { useDataProduct } from '../../hooks/useDataProduct';

export const Modal = () => {

    return (
        <>
            <div>
                <div className="modal fade " id="modalExample" tabIndex="-1" aria-labelledby="modalTitle" aria-hidden="true">
                    <div className="modal-dialog modal-descripcion-product">
                        <div className="modal-content">
                            <div className="cerrar-modal" data-bs-dismiss="modal" aria-label="Close">
                                <svg id="Flat" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                                    <path d="M202.82861,197.17188a3.99991,3.99991,0,1,1-5.65722,5.65624L128,133.65723,58.82861,202.82812a3.99991,3.99991,0,0,1-5.65722-5.65624L122.343,128,53.17139,58.82812a3.99991,3.99991,0,0,1,5.65722-5.65624L128,122.34277l69.17139-69.17089a3.99991,3.99991,0,0,1,5.65722,5.65624L133.657,128Z" />
                                </svg>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-lg-6 swiper-modal">
                                        <Swiper
                                            navigation={{
                                                nextEl: '.next-3',
                                                prevEl: '.prev-3',
                                            }}
                                            effect={"creative"}
                                            modules={[Navigation, Pagination]}
                                            pagination={{
                                                clickable: true,
                                                // cambiar solo el color a la paginacion
                                                renderBullet: function (index, className="swiper-pagination-bullet") {
                                                    return '<span class="' + className + '"></span>';
                                                }
                                            }}
                                            className="swiper-modal-img"
                                        >
                                            <SwiperSlide>
                                                <img src="/src/assets/img/1.png" alt="Imagen 1" />
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src="/src/assets/img/8.png" alt="Imagen 2" />
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src="/src/assets/img/24.png" alt="Imagen 3" />
                                            </SwiperSlide>
                                            <div className="swiper-button-prev prev-3">
                                                <i className="fa-solid fa-circle-chevron-left"></i>
                                            </div>
                                            <div className="swiper-button-next next-3">
                                                <i className="fa-solid fa-circle-chevron-left fa-rotate-180"></i>
                                            </div>
                                        </Swiper>
                                        {/* pagination */}

                                    </div>
                                    <div className="col-lg-6 ">
                                        <div className="scrollable-info d-flex flex-column gap-4 p-3">
                                            <h2 className="nombre-producto">Nombre del producto</h2>
                                            <p className="precio-producto">$ 000.00</p>
                                            <p>Envío calculado en la facturación</p>
                                            {/* talla para seleccionar con etiqueta select */}
                                            <div className="talla-producto">
                                                <label htmlFor="talla">Talla</label>
                                                <select name="talla" id="talla">
                                                    <option value="S">S</option>
                                                    <option value="M">M</option>
                                                    <option value="L">L</option>
                                                    <option value="XL">XL</option>
                                                    <option value="Talla única">Talla única</option>
                                                </select>
                                            </div>
                                            <div className="info-agregar-2">
                                                <svg className='carrito-añadir-2' height="30" viewBox="0 0 30 30" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 17h14c.278 0 .5.223.5.5s-.222.5-.5.5h-14c-.276 0-.5-.223-.5-.5s.224-.5.5-.5zm-1-4h16c.278 0 .5.223.5.5s-.222.5-.5.5h-16c-.276 0-.5-.223-.5-.5s.224-.5.5-.5zm-9-8c-.653 0-.67 1 0 1h3.6c.078.346.64 2.81 1.312 5.736.717 3.126 1.452 7.32 1.606 7.893.132.494.255 1.055.62 1.544.362.488 1 .826 1.862.826h16c.86 0 1.5-.338 1.863-.826.364-.49.487-1.05.62-1.545.265-.993 1.62-6.944 1.89-7.952.152-.566.202-1.156.022-1.69-.18-.534-.72-.988-1.395-.988h-20c-.653 0-.66 1 0 1h20c.325 0 .366.07.447.31.08.238.076.674-.04 1.108-.267.992-1.62 6.945-1.89 7.953-.135.506-.262.945-.456 1.206-.194.262-.42.424-1.06.424h-16c-.64 0-.866-.162-1.06-.424-.195-.26-.322-.7-.458-1.205-.114-.426-.88-4.732-1.595-7.856-.717-3.125-1.4-6.125-1.4-6.125C4.938 5.16 4.735 5 4.5 5zm23 18c-1.373 0-2.5 1.125-2.5 2.5s1.127 2.5 2.5 2.5c1.376 0 2.5-1.125 2.5-2.5S24.877 23 23.5 23zm0 1c.836 0 1.5.666 1.5 1.5s-.664 1.5-1.5 1.5c-.833 0-1.5-.666-1.5-1.5s.667-1.5 1.5-1.5zm-12-1C10.128 23 9 24.125 9 25.5s1.127 2.5 2.5 2.5c1.376 0 2.5-1.125 2.5-2.5S12.877 23 11.5 23zm0 1c.836 0 1.5.666 1.5 1.5s-.664 1.5-1.5 1.5c-.833 0-1.5-.666-1.5-1.5s.667-1.5 1.5-1.5z" /></svg>
                                                <span>Añadir al carrito</span>
                                            </div>
                                            {/* informacion adicional del producto */}
                                            <div className="info-adicional">
                                                <h3>Categoria</h3>
                                                <p>Información adicional del producto</p>
                                            </div>
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


Modal.defaultProps = {

    // Nombre: "Nombre del producto",
    // Precio


}