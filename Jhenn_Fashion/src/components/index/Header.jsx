import React from 'react';
import logo from '../../assets/img/image.png';
import { Link, NavLink } from 'react-router-dom';
import imgBanner from '../../assets/img/2565264.jpg';
import imgBanner2 from '../../assets/img/2430757.jpg';
import imgBanner3 from '../../assets/img/2566017.jpg';

export const Header = () => {
    return (
        <>
            <header>
                <div id="carouselExampleAutoplaying" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="4500">
                            <img src={imgBanner} className="d-block w-100 img-carousel" alt="img=carousel-1" />
                        </div>
                        <div className="carousel-item" data-bs-interval="4500">
                            <img src={imgBanner2} className="d-block w-100 img-carousel" alt="img=carousel-1" />
                        </div>
                        <div className="carousel-item" data-bs-interval="4500">
                            <img src={imgBanner3} className="d-block w-100 img-carousel" alt="img=carousel-1" />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                        <div className="buton-style">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        </div>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                        <div className="buton-style">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        </div>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                <div className="links">
                    <nav className="navbar navbar-expand cont-links-nav">
                        <div className="container-fluid">
                            <div className='links-ul'>
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-underline">
                                    <li className='nav-item item-link'>
                                        <Link to={"#"} className="nav-link pad-b-link" >
                                            <i className="fa-brands fa-shopify"></i>
                                            <span className="menu-list__title">TIENDA</span>
                                        </Link>
                                    </li>
                                    <li className='nav-item item-link'>
                                        <Link to={"#"} className="nav-link pad-b-link" aria-current="page">
                                            <i className="fa-brands fa-square-whatsapp"></i>
                                            <span className="menu-list__title">ASESORA DE VENTA</span>
                                        </Link>
                                    </li>
                                    <li className='nav-item item-link'>
                                        <Link to={"#"} className="nav-link pad-b-link" aria-current="page">
                                            <i className="fa-brands fa-square-instagram"></i>
                                            <span className="menu-list__title">INSTAGRAM</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className='info-adi d-none d-md-flex'>
                    <span>Envíos gratis por compras mayores a $150.000 COP</span>
                </div>
                <nav className="navbar navbar-expand cont-nav">
                    <div className="container-fluid">
                        <div className='links-ul'>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-underline">
                                <li className='item-inicio nav-item item-link-2'>
                                    <NavLink to={"/inicio"} className="nav-link" >
                                        <i className="fa-solid fa-home"></i>
                                        <span className="menu-list__title">INICIO</span>
                                    </NavLink>
                                </li>
                                <li className='item-login nav-item item-link-2'>
                                    <NavLink to={"/login"} className="nav-link" aria-current="page">
                                        <i className="fa-solid fa-user"></i>
                                        <span className="menu-list__title">LOGIN</span>
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>

        </>
    )
}
