import { useState } from "react";

export const RopaDeportiva = () => {

    const [tallas, setTallas] = useState([]);
    const [cantidades, setCantidades] = useState({});
    const [images, setImages] = useState([]);

    const handleCheckboxChange = (event) => {
        const { value, checked } = event.target;
        if (checked) {
            setTallas((prevTallas) => [...prevTallas, value]);
            setCantidades((prevCantidades) => ({ ...prevCantidades, [value]: "" }));
        } else {
            setTallas((prevTallas) => prevTallas.filter((talla) => talla !== value));
            setCantidades((prevCantidades) => {
                const { [value]: removedTalla, ...rest } = prevCantidades;
                return rest;
            });
        }
    };

    const handleCantidadChange = (event) => {
        const { name, value } = event.target;
        setCantidades((prevCantidades) => ({ ...prevCantidades, [name]: value }));
    };

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     console.log("Tallas seleccionadas:", tallas);
    //     console.log("Cantidades:", cantidades);
    // };

    const handleImageChange = (event) => {
        const fileList = event.target.files;
        const imagesArray = Array.from(fileList);
        setImages(imagesArray);
    };


    return (
        <div className='cont-box mt-5'>
            <div className="search mx-auto">
                <div className="input-group"
                    id="search"
                >
                    <input type="text" className="form-control" placeholder="Buscar un producto" aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <button className=" btn-black" type="button" id="button-addon2"><i className="fas fa-search"></i></button>
                </div>
            </div>
            <div className=' nuevo-producto d-flex flex-column align-items-center gap-1' data-bs-toggle="modal" data-bs-target="#modalProducts">
                <i className="fa-solid fa-circle-plus fs-1"></i>
                <span>Nuevo Producto</span>
            </div>
            <div className="cont-productos mt-5 w-75 mx-auto p-3">
                <div className="row descripcion-product-bolsa flex-nowrap">
                    <div className="img-dash col-2">
                        <img src="/src/assets/img/1.png" alt="" className=' rounded-3' />
                    </div>
                    <div className="info-dash col-7">
                        <h4>ENTERO 1306 COPA REALCE ROMERO</h4>
                        <div className="talla-product-dash">
                            <span>L</span>
                        </div>
                        <span className='precio-product-dash'>$150.000</span>
                    </div>
                    <div className="accion-prodcutos-dash col-3 d-flex justify-content-center align-items-center gap-5  ">
                        <i className="fa-solid fa-pen-to-square editar fs-2" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Editar" ></i>
                        <i className="fa-solid fa-trash-can eliminar fs-2" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Eliminar"></i>
                    </div>
                </div>
                <hr />
            </div>
            <div className="modal fade" id="modalProducts" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Nuevo Producto</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form action="">
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Nombre del Producto</label>
                                    <input type="text" className="form-control" id="name" name='name' aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="descripcion" className="form-label">Descripción</label>
                                    <input type="text" className="form-control" id="descripcion" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="precio" className="form-label">Precio</label>
                                    <input type="number" className="form-control" id="precio" />
                                </div>
                                <div className="seleccion-talla mb-3 ">
                                    <label htmlFor="tallas" className="form-label">
                                        Tallas:
                                    </label>
                                    <div className="form-check d-flex gap-4">
                                        <div>
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                name="tallas"
                                                value="S"
                                                id="tallaS"
                                                onChange={handleCheckboxChange}
                                            />
                                            <label className="form-check-label" htmlFor="tallaS">
                                                S
                                            </label>
                                        </div>

                                        {tallas.includes("S") && (
                                            <input
                                                type="number"
                                                name="sizeS"
                                                value={cantidades.sizeS}
                                                onChange={handleCantidadChange}
                                                placeholder="Cantidad"
                                            />
                                        )}
                                    </div>
                                    <div className="form-check d-flex gap-4">
                                        <div>
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                name="tallas"
                                                value="M"
                                                id="tallaM"
                                                onChange={handleCheckboxChange}
                                            />
                                            <label className="form-check-label" htmlFor="tallaM">
                                                M
                                            </label>
                                        </div>
                                        {tallas.includes("M") && (
                                            <input
                                                type="number"
                                                name="sizeM"
                                                value={cantidades.sizeM}
                                                onChange={handleCantidadChange}
                                                placeholder="Cantidad"
                                            />
                                        )}
                                    </div>
                                    <div className="form-check d-flex gap-4">
                                        <div>
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                name="tallas"
                                                value="L"
                                                id="tallaL"
                                                onChange={handleCheckboxChange}
                                            />
                                            <label className="form-check-label" htmlFor="tallaL">
                                                L
                                            </label>
                                        </div>
                                        {tallas.includes("L") && (
                                            <input
                                                type="number"
                                                name="sizeL"
                                                value={cantidades.sizeL}
                                                onChange={handleCantidadChange}
                                                placeholder="Cantidad"
                                            />
                                        )}
                                    </div>
                                    <div className="form-check d-flex gap-4">
                                        <div>
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                name="tallas"
                                                value="XL"
                                                id="tallaXL"
                                                onChange={handleCheckboxChange}
                                            />
                                            <label className="form-check-label" htmlFor="tallaXL">
                                                XL
                                            </label>
                                        </div>
                                        {tallas.includes("XL") && (
                                            <input
                                                type="number"
                                                name="sizeXL"
                                                value={cantidades.sizeXL}
                                                onChange={handleCantidadChange}
                                                placeholder="Cantidad"
                                            />
                                        )}
                                    </div>
                                    <div className="form-check d-flex gap-4">
                                        <div>
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                name="tallas"
                                                value="TallaUnica"
                                                id="tallaUnica"
                                                onChange={handleCheckboxChange}
                                            />
                                            <label className="form-check-label" htmlFor="tallaUnica">
                                                Talla Única
                                            </label>
                                        </div>
                                        {tallas.includes("TallaUnica") && (
                                            <input
                                                type="number"
                                                name="sizeUnique"
                                                value={cantidades.sizeUnique}
                                                onChange={handleCantidadChange}
                                                placeholder="Cantidad"
                                            />
                                        )}
                                    </div>
                                </div>
                                <div className="subir-imaganes mb-3">
                                    <div className="mb-3">
                                        <label htmlFor="image1" className="form-label">
                                            Imagen 1:
                                        </label>
                                        <input type="file" className="form-control" id="image1" name="fil0" onChange={handleImageChange} multiple />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="image2" className="form-label">
                                            Imagen 2:
                                        </label>
                                        <input type="file" className="form-control" id="image2" name="fil1" onChange={handleImageChange} multiple />
                                    </div>
                                </div>
                                <div className="en-oferta">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="offer" id="offer" />
                                        <label className="form-check-label" htmlFor="offer">
                                            En Oferta
                                        </label>
                                    </div>
                                </div>
                                <div className="mas-vendido">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="masvendido" id="masvendido" />
                                        <label className="form-check-label" htmlFor="masvendido">
                                            Más Vendido
                                        </label>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="categoria" className="form-label">
                                        Categoría:
                                    </label>
                                    <select className="form-select" aria-label="Default select example" id="categoria">
                                        <option value="1">Camisetas</option>
                                        <option value="2">Pantalones</option>
                                        <option value="3">Zapatos</option>
                                        <option value="4">Accesorios</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <button type="submit" className="btn btn-primary">
                                        Crear
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">cerrar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
