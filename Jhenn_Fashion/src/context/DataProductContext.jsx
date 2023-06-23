import { createContext, useState} from "react";

const DataProduct_Context = createContext();

export const DataProductContext = ({children}) => {
    const [datosProductoModal, setDatosProductoModal] = useState('HOLA') //useState para guardar los datos del producto que se va a mostrado en el modal objeto {}
    const [datosAddCarrito, setDatosAddCarrito] = useState([]) //useState para guardar arreglo de objetos de los productos que se van a agregar al carrito

   //funcion para agregar un producto al carrito
    const addCarrito = (producto) => {
      setDatosAddCarrito([...datosAddCarrito, producto])
    }

  return (  
    <DataProduct_Context.Provider
     value={{datosProductoModal, setDatosProductoModal, addCarrito, datosAddCarrito}}
     
    >
      {children}
    </DataProduct_Context.Provider>
  );
}
export default DataProduct_Context;