import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Carousel } from './Carousel';
import { NavCategorias } from './NavCategorias';
import { NavItems } from './NavItems';

export const Header = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isDropdownOpen_2, setIsDropdownOpen_2] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 992) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        }
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    const handleMouseEnter = () => setIsDropdownOpen(true);
    const handleMouseLeave = () => {
        document.querySelector('.dropdown-menu-1').classList.add('animate__fadeOut', 'animate__delay-0.1s', 'animate__faster');
        setTimeout(() => {
            setIsDropdownOpen(false);
        }, 300);
    };
    
    const handleClickMouse = () => {
        if (isDropdownOpen) {
            handleMouseLeave();
        } else {
            handleMouseEnter();
        }
    }

    const handleMouseEnter_2 = () => setIsDropdownOpen_2(true);
    const handleMouseLeave_2 = () => {
        document.querySelector('.dropdown-menu-2').classList.add('animate__fadeOut', 'animate__delay-0.1s', 'animate__faster');
        setTimeout(() => {
            setIsDropdownOpen_2(false);
        }, 300);
    };
    const handleClickMouse_2 = () => {
        if (isDropdownOpen_2) {
            handleMouseLeave_2();
        } else {
            handleMouseEnter_2();
        }
    }

    return (
        <>
            <header>
                <div id="carouselExampleAutoplaying" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <Carousel />
                </div>
                <div className={`links ${isMobile ? '' : 'd-flex align-items-center'}`}>
                    <NavCategorias
                        NavLink={NavLink}
                        isDropdownOpen={isDropdownOpen}
                        handleMouseEnter={handleMouseEnter}
                        handleMouseLeave={handleMouseLeave}
                        handleClickMouse={handleClickMouse}
                    />
                    <NavItems
                        NavLink={NavLink}
                        isDropdownOpen_2={isDropdownOpen_2}
                        handleMouseEnter_2={handleMouseEnter_2}
                        handleMouseLeave_2={handleMouseLeave_2}
                        handleClickMouse_2={handleClickMouse_2}
                        
                    />
                </div>
                <div className='info-adi d-none d-lg-flex'>
                    <span>Envíos gratis por compras mayores a $150.000 COP</span>
                </div>
            </header>
        </>
    )
}
