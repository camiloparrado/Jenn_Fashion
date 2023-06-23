import { Link } from 'react-router-dom';

export const ContactoWhatsapp = () => {
    return (
        <>
            <Link to={'https://api.whatsapp.com/send?phone=573112428572&text=Hola%20Jenn%20Fashion%20me%20gustar%C3%ADa%20saber%20m%C3%A1s%20sobre%20sus%20productos'} className="whatsapp-button" target="_blank">
                <i className="i-whatsapp fa-brands fa-whatsapp"></i>
                <span>Asesora de Ventas</span>
            </Link>
        </>
    )
}
