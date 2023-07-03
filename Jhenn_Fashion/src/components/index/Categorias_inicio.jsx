
import { NavLink } from 'react-router-dom';

export const Categorias_inicio = () => {
    return (
        <>
            <div className="container-collage">
                <div className="wrapper">
                    <NavLink to={"/Nosotras-shorts"}>
                        <h2>SHORTS</h2>
                        <div className="cardd"><i className="fal fa-solid fa-circle-arrow-right"></i></div>
                    </NavLink>
                </div>
                <div className="wrapper">
                    <NavLink to={"/Nosotras-leggins"}>
                        <h2>LEGGINS</h2>
                        <div className="cardd"><i className="fal fa-solid fa-circle-arrow-right"></i></div>
                    </NavLink>
                </div>
                <div className="wrapper">
                    <NavLink to={"/Nosotras-tops"}>
                        <h2>TOPS</h2>
                        <div className="cardd"><i className="fal fa-solid fa-circle-arrow-right"></i></div>
                    </NavLink>
                </div>
                <div className="wrapper">
                    <NavLink to={"/Nosotras-conjuntos"}>
                        <h2>CONJUNTOS</h2>
                        <div className="cardd"><i className="fal fa-solid fa-circle-arrow-right"></i></div>
                    </NavLink>
                </div>
                <div className="wrapper">
                    <NavLink to={"/Nosotras-bikkers"}>
                        <h2>BIKERS</h2>
                        <div className="cardd"><i className="fal fa-solid fa-circle-arrow-right"></i></div>
                    </NavLink>
                </div>
                <div className="wrapper">
                    <NavLink to={"/tienda"}>
                        <h2>VER MÁS</h2>
                        <div className="cardd"><i className="fal fa-solid fa-circle-arrow-right"></i></div>
                    </NavLink>
                </div>
            </div>
        </>
    )
}
