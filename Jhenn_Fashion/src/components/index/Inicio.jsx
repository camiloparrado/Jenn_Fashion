import { Slider } from './Slider';
import { Slider1 } from './Slider1';
import { Slider2 } from './Slider2';
import { Categorias_inicio } from './Categorias_inicio';
// import { Modal } from './Modal';

export const Inicio = () => {

    return (

        <>
            <div className="cont-box">
                <div className='tittle'>
                    <h1>Colección Jenn Fashion</h1>
                    <hr />
                </div>
                <div className="cont-info">
                    <Categorias_inicio />
                </div>
                <div className='tittle'>
                    <h1>Lo más vendido</h1>
                    <hr />
                </div>
                <div className="cont-info">
                    <Slider 
                        
                    />
                </div>
                <div className='tittle'>
                    <h1>Nueva colección</h1>
                    <hr />
                </div>
                <div className="cont-info">
                    <Slider1 />
                </div>
                <div className='tittle'>
                    <h1>En oferta</h1>
                    <hr />
                </div>
                <div className="cont-info">
                    <Slider2 />
                </div>
                <a className="btn btn-dark ir" href="#" role="button">
                    Ver más en la tienda <i className="fa-solid fa-right-to-bracket btn-ir"></i>
                </a>
            </div>
            {/* <Modal /> */}
        </>

    )
}
