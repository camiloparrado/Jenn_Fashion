import imgBanner from '../../assets/img/Banner1.jpg';
import imgBanner2 from '../../assets/img/Baner2.jpg';
import imgBanner3 from '../../assets/img/Banner3.jpg';

export const Carousel = () => {
    return (
        <>
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="4500">
                    <img src={imgBanner} className="d-block w-100 img-carousel" alt="img=carousel-1" />
                </div>
                <div className="carousel-item" data-bs-interval="4500">
                    <img src={imgBanner2} className="d-block w-100 img-carousel" alt="img=carousel-1" />
                </div>
                <div className="carousel-item" data-bs-interval="4500">
                    <img src={imgBanner3} className="d-block w-100 img-carousel" alt="img=carousel-1" />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <div className="buton-style">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                </div>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <div className="buton-style">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                </div>
                <span className="visually-hidden">Next</span>
            </button>
        </>
    )
}
