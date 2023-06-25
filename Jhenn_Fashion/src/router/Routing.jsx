import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';
import { Inicio } from '../components/index/Inicio';
import { Login } from '../components/user/Login';
import { InicioLayout } from '../components/index/InicioLayout';
import { Shoping } from '../components/publications-shoping/shoping';
import { EnOferta } from '../components/billing/EnOferta';
import { DataProductContext } from '../context/DataProductContext';




export const Routing = () => {

  return (
    <BrowserRouter>
      <DataProductContext>
        <Routes>
          <Route path='/' element={<InicioLayout />} >
            <Route index element={<Inicio />} />
            <Route path="login" element={<Login />} />
            <Route path='tienda' element={<Shoping />} />
            <Route path='En-Oferta' element={<EnOferta />} />
          </Route>
          <Route
            path="*"
            element={
              <>
                <p>
                  <h1>Error 404</h1>
                  <Link to="/">Volver al inicio</Link>
                </p>
              </>
            }
          ></Route>
        </Routes>
      </DataProductContext>
    </BrowserRouter>

  )
}
