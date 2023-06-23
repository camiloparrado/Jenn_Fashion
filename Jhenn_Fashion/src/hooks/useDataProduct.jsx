import { useContext } from "react"
import DataProduct_Context from "../context/DataProductContext"

export const useDataProduct = () => {
  return useContext(DataProduct_Context);
}
export default useDataProduct;