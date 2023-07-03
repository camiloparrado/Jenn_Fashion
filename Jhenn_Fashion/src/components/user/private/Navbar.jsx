import React from 'react'

export const Navbar = ({handToggle}) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid d-flex align-items-center">
                <a className="navbar-brand d-none d-md-block" href="#">Panel De Administración</a>
                <a className="navbar-brand d-flex align-items-center justify-content-center toggler-sidebar" href='#' onClick={handToggle}>
                    <i className='bi bi-justify'></i>
                </a>
                <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link text-white mx-1 border" aria-current="page" href="#">
                                <i className='bi bi-search'></i> Search
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white mx-1 border" aria-current="page" href="#">Account</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white mx-1 border" aria-current="page" href="#">Logout</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
