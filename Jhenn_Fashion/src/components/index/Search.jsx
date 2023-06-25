export const Search = () => {
    return (
        <>
            {/* crear un buscador con bootstrap */}
            <div className="cont-box">
                <div className="search m-auto">
                <div className="input-group mb-3"
                    id="search"
                >
                    <input type="text" className="form-control" placeholder="Buscar un producto" aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <button className=" btn-black" type="button" id="button-addon2"><i className="fas fa-search"></i></button>
                </div>
                </div>
            </div>

        </>
    )
}
