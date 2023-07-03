import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';
import { Inicio } from '../components/index/Inicio';
import { Login } from '../components/user/Login';
import { InicioLayout } from '../components/index/InicioLayout';
import { Shoping } from '../components/publications-shoping/Shoping';
import { EnOferta } from '../components/publications-shoping/EnOferta';
import { DataProductContext } from '../context/DataProductContext';
import { NosotrasShorts } from '../components/publications-shoping/NosotrasShorts';
import { NosotrasLeggins } from '../components/publications-shoping/NosotrasLeggins';
import { NosotrasTops } from '../components/publications-shoping/NosotrasTops';
import { NosotrasConjuntos } from '../components/publications-shoping/NosotrasConjuntos';
import { NosotrasBikkers } from '../components/publications-shoping/NosotrasBikkers';
import { PrivateLayout } from '../components/user/private/PrivateLayout';
import { Home } from '../components/user/private/Home';
import { RopaDeportiva } from '../components/user/private/RopaDeportiva';




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
            <Route path='Nosotras-shorts' element={<NosotrasShorts/>} />
            <Route path='Nosotras-leggins' element={<NosotrasLeggins/>} />
            <Route path='Nosotras-tops' element={<NosotrasTops/>} />
            <Route path='Nosotras-conjuntos' element={<NosotrasConjuntos/>} />
            <Route path='Nosotras-bikkers' element={<NosotrasBikkers/>} />
          </Route>

          <Route path="/dashboard" element={<PrivateLayout/>}>
            <Route index element={<Home/>} />
            <Route path='inicio-dashboard'  element={<Home/>}/>
            <Route path='ropa-deportiva' element={<RopaDeportiva/>}/>
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
