import { Routes, Route, BrowserRouter, Navigate, Link } from 'react-router-dom';
import { Inicio } from '../components/index/inicio';
import { Login } from '../components/user/Login';
import { InicioLayout } from '../components/index/InicioLayout';
import { ShopingLayout } from '../components/publications-shoping/ShopingLayout';
import { Shoping } from '../components/publications-shoping/shoping';




export const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<InicioLayout />} >
          <Route index element={<Inicio />} />
          <Route path="inicio" element={<Inicio />} />
          <Route path="login" element={<Login />} />
        </Route>
        <Route path='/tienda' element={<ShopingLayout/>}>
            <Route index element={<Shoping/>}/>
            <Route path='tienda-home' element={<Shoping/>}/>
        </Route>
        <Route
          path="*"
          element={
            <>
              <p>
                <h1>Error 404</h1>
                <Link to="/inicio">Volver al inicio</Link>
              </p>
            </>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  )
}
