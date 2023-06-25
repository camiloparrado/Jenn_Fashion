/* eslint-disable no-undef */
import { useState, useEffect, useCallback } from "react"
export const ScrollButtonUp = () => {
    //usar useState y useEffect para mostrar el boton de scroll up y si vuelve a la parte de arriba de la pagina, se oculte
    const [showScroll, setShowScroll] = useState(false);
    const [inDisplay, setInDisplay] = useState(false);

    const checkScrollTop = useCallback(() => {
        if (!showScroll && window.scrollY > 400) {
            setShowScroll(true);
        } else if (showScroll && window.scrollY <= 400) {
            //agregar un display none al boton
            setShowScroll(false);

        }
    }, [showScroll]);

    if (showScroll && !inDisplay) {
        setInDisplay(true);
    }
    if (!showScroll && inDisplay) {

        setTimeout(() => {
            setInDisplay(false);
        }, 700);
    }

    useEffect(() => {
        window.addEventListener('scroll', checkScrollTop)
        return () => {
            window.removeEventListener('scroll', checkScrollTop)
        }
    }, [checkScrollTop])


    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }



    return (
        <i className={`fa-solid fa-circle-up scroll-button-up ${showScroll ? 'animate__animated animate__fadeIn' : 'animate__animated animate__fadeOut'} `} onClick={scrollTop} style={{display: inDisplay? 'block':'none'}} ></i>
    )
}
