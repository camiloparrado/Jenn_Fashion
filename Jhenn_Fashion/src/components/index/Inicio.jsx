import React from 'react';
import { Slider } from './Slider';

export const Inicio = () => {

    return (

        <>
            <div className="cont-slider">
                <div className='tittle'>
                    <h1>Colección Jenn Fashion</h1>
                </div>
                <div className="sliderss">
                    {/* <div className="cont-img1">
                        <img src="src/assets/img/24.png" alt="img" /> 
                    </div>
                    <div className="cont-img2">
                        <img src="src/assets/img/15.png" alt="img" />
                    </div>
                    <div className="cont-img3">
                        <img src="src/assets/img/18.png" alt="img" /> 
                    </div> */}
                    <div className="container-collage">
                        <div className="wrapper">
                            <h2>SHORTS</h2>
                            <div className="card"><i className="fal fa-solid fa-circle-arrow-right"></i></div>
                        </div>
                        <div className="wrapper">
                            <h2>LEGGINS</h2>
                            <div className="card"><i className="fal fa-solid fa-circle-arrow-right"></i></div>
                        </div>
                        <div className="wrapper">
                        <h2>TOPS</h2>
                            <div className="card"><i className="fal fa-solid fa-circle-arrow-right"></i></div>
                        </div>
                        <div className="wrapper">
                            <h2>CONJUNTOS</h2>
                            <div className="card"><i className="fal fa-solid fa-circle-arrow-right"></i></div>
                        </div>
                        <div className="wrapper">
                            <h2>BIKERS</h2>
                            <div className="card"><i className="fal fa-solid fa-circle-arrow-right"></i></div>
                        </div>
                        <div className="wrapper">
                            <h2>VER MÁS</h2>
                            <div className="card"><i className="fal fa-solid fa-circle-arrow-right"></i></div>
                        </div>
                    </div>
                </div>
                <div className="sliderss">
                    <Slider />
                </div>

            </div>
        </>

    )
}
