import carrito from '../../assets/img/carrito.svg';

export const NavItems = ({ NavLink, isDropdownOpen_2,  handleMouseEnter_2, handleMouseLeave_2, handleClickMouse_2}) => {
    return (
        <>
            <nav className="navbar navbar-nav navbar-expand-lg nav-2 items-acciones">
                <div className="container-fluid justify-content-end">
                    <div className="navar-brand d-flex flex-row">
                        <li className='nav-item item-link p-2'>
                            <NavLink to={"/login"} className="nav-link" >
                                <i className="fas fa-user user-login"></i>
                            </NavLink>
                        </li>
                        <li className='nav-item item-link p-2'>
                            <div className="count-car">
                                <span>10</span>
                            </div>
                            <NavLink to={"/carrito"} className="nav-link" >
                                <img src={carrito} alt="carrito" className='carrito-shop' />
                            </NavLink>
                        </li>
                    </div>
                    <button className="navbar-toggler btn-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynav" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation" >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className='d-lg-none container-fluid ' >
                        <div className="collapse-nav collapse navbar-collapse" id='mynav'>
                            <ul className="navbar-nav mb-2 mb-lg-0">
                                <li className='nav-item' >
                                    <NavLink to={"/"} className="nav-link " >
                                        <span>INICIO</span>
                                    </NavLink>
                                </li>
                                <hr className='hr-nav' />
                                <li className='nav-item' >
                                    <NavLink to={"/tienda"} className="nav-link" >
                                        <span>TIENDA</span>
                                    </NavLink>
                                </li>
                                <hr className='hr-nav' />
                                <li className='nav-item' >
                                    <NavLink to={'/En-Oferta'} className="nav-link" >
                                        <span>EN OFERTA</span>
                                    </NavLink>
                                </li>
                                <hr className='hr-nav' />
                                <li className={`nav-item dropdown`}
                                    onMouseEnter={handleMouseEnter_2}
                                    onMouseLeave={handleMouseLeave_2}
                                    onClick={handleClickMouse_2}
                                >
                                    <div className="nav-link dropdown-toggle" role="button" >
                                        <span>NOSOTRAS</span>
                                    </div>
                                    <ul className={`dropdown-menu dropdown-menu-2 animate__animated ${isDropdownOpen_2 ? 'show animate__fadeIn animate__delay-0.1s animate__faster' : ''}`}>
                                        <li ><NavLink className="dropdown-item dropdown-item-1" to={''}><span>Shorts</span></NavLink></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li ><NavLink className="dropdown-item dropdown-item-1" to={''}><span>Leggins</span></NavLink></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li ><NavLink className="dropdown-item dropdown-item-1" to={''}><span>Tops</span></NavLink></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li ><NavLink className="dropdown-item dropdown-item-1" to={''}><span>Conjuntos</span></NavLink></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li ><NavLink className="dropdown-item dropdown-item-1" to={''}><span>Bikkers</span></NavLink></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
