import React from 'react';
import { Slider } from './Slider';

export const Inicio = () => {

    return (

        <>
            <div className="cont-slider">
                <div className='tittle'>
                    <h1>Colección Jenn Fashion</h1>
                </div>
                <div className="sliderss cont-img-home">
                    <div className="cont-img1">
                        <img src="src/assets/img/image2.png" alt="img" />
                        
                    </div>
                    <div className="cont-img2">
                        <img src="src/assets/img/imgHome2.png" alt="img" />
                    </div>
                    <div className="cont-img3">
                        <img src="src/assets/img/imgHome3.png" alt="img" />
                    </div>
                </div>
                <div className="sliderss">
                    <Slider/>
                </div>
            
            </div>
        </>

    )
}
