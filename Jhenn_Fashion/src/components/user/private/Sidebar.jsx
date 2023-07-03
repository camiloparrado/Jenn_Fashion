import { useState } from "react";
import { NavLink } from "react-router-dom";

export const Sidebar = () => {
    const [active, setActive] = useState(1);

    return (
        <div className='sidebar-dash d-flex justify-content-between flex-column bg-dark text-white py-3 ps-3 pe-5 vh-100'>
            <div>
                <NavLink to='' className='p-3 text-decoration-none text-white'>
                    <i className="bi bi-code-slash fs-4 me-4"></i>
                    <span className='fs-3'>JennFashion</span>
                </NavLink>
                <hr className='text-white mt-2' />
                <nav className='nav nav-pills flex-column mt-3'>
                    <li className={`nav-item p-2  text-decoration-none text-white ${active === 1 ? 'active-item-dash' : ''}`} onClick={e => setActive(1)}>
                        <NavLink to={'/dashboard/inicio-dashboard'} className='text-decoration-none text-white'>
                            <span className='p-1'>
                                <i className='bi bi-speedometer2 me-3 fs-5'></i>
                                <span className='fs-4'>Alcance Ventas</span>
                            </span>
                        </NavLink>
                    </li>
                    <li className={`nav-item dropdown p-2  text-decoration-none text-white ${active === 2 ? 'active-item-dash' : ''}`} onClick={e => setActive(2)}>
                        <div className='p-1  dropdown-toggle' data-bs-toggle="dropdown">
                            <i className="bi bi-bag-heart-fill me-3 fs-5"></i>
                            <span className='fs-4'>Artículos</span>
                        </div>
                        <ul className="dropdown-menu bg-transparent border-0 text-white">
                            <li><NavLink to={'/dashboard/ropa-deportiva'} className='dropdown-item text-white'>Ropa Deportiva</NavLink></li>
                            <li><NavLink to={''} className='dropdown-item text-white'>Productos</NavLink></li>
                        </ul>
                    </li>
                    <li className={`nav-item p-2  text-decoration-none text-white ${active === 3 ? 'active-item-dash' : ''}`} onClick={e => setActive(3)}>
                        <NavLink to={''} className='text-decoration-none text-white'>
                            <span className='p-1'>
                                <i className='bi bi-table me-3 fs-5'></i>
                                <span className='fs-4'>ordenes</span>
                            </span>
                        </NavLink>
                    </li>
                    <li className={`nav-item p-2  text-decoration-none text-white ${active === 4 ? 'active-item-dash' : ''}`} onClick={e => setActive(4)}>
                        <NavLink to={''} className='text-decoration-none text-white'>
                            <span className='p-1'>
                                <i className='bi bi-grid me-3 fs-5'></i>
                                <span className='fs-4'>Reportes</span>
                            </span>
                        </NavLink>
                    </li>
                </nav>
            </div>
            <div className='nav-item p-2'>
                <hr className='text-white' />
                <NavLink to={''} className='p-1  text-decoration-none text-white'>
                    <i className='bi bi-person-circle me-3 fs-5'></i>
                    <span className='fs-4'><strong>Yousaf</strong></span>
                </NavLink>
            </div>
        </div>
    )
}
