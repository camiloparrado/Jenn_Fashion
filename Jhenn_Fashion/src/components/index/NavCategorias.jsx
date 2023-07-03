import home from '../../assets/img/Home.svg';
import offer from '../../assets/img/offer2.svg';
import nosotras from '../../assets/img/nosotras.svg';

export const NavCategorias = ({ NavLink, isDropdownOpen, handleMouseEnter, handleMouseLeave, handleClickMouse }) => {
    return (
        <>
            <nav className="navbar navbar-expand cont-links-nav d-none d-lg-flex m-auto">
                <div className="container-fluid">
                    <div className='links-ul'>
                        <ul className="navbar-nav mb-2 mb-lg-0 nav-underline">
                            <li className='nav-item item-link'>
                                <NavLink to={"/"} className="nav-link pad-b-link" >
                                    <img src={home} alt="inicio" className='home' />
                                    <span className="menu-list__title">INICIO</span>
                                </NavLink>
                            </li>
                            <li className='nav-item item-link'>
                                <NavLink to={"/tienda"} className="nav-link pad-b-link" >
                                    <i className="tienda fa-brands fa-shopify"></i>
                                    <span className="menu-list__title tienda-1">TIENDA</span>
                                </NavLink>
                            </li>
                            <li className='nav-item item-link'>
                                <NavLink to={'/En-Oferta'} className="nav-link pad-b-link" >
                                    <img src={offer} alt="oferta" />
                                    <span className="menu-list__title">EN OFERTA</span>
                                </NavLink>
                            </li>
                            <li className={`nav-item dropdown dropdown-1 `}
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                                onClick={handleClickMouse}
                            >
                                <div className="nav-link dropdown-toggle pad-b-link" role="button" >
                                    <img src={nosotras} alt="nosotras" className="menu-list__title nosotras" />
                                    <span>NOSOTRAS</span>
                                </div>
                                <ul className={`dropdown-menu dropdown-menu-1 animate__animated ${isDropdownOpen ? 'show animate__fadeIn animate__delay-0.1s animate__faster' : ''}`}>
                                    <li><NavLink className="dropdown-item dropdown-item-1" to={'/Nosotras-shorts'}><span>Shorts</span></NavLink></li>
                                    <li><NavLink className="dropdown-item dropdown-item-1" to={'/Nosotras-leggins'}><span>Leggins</span></NavLink></li>
                                    <li><NavLink className="dropdown-item dropdown-item-1" to={'/Nosotras-tops'}><span>Tops</span></NavLink></li>
                                    <li><NavLink className="dropdown-item dropdown-item-1" to={'/Nosotras-conjuntos'}><span>Conjuntos</span></NavLink></li>
                                    <li><NavLink className="dropdown-item dropdown-item-1" to={'/Nosotras-bikkers'}><span>Bikkers</span></NavLink></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
