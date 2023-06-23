import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'
import { Search } from './Search'
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ContactoWhatsapp } from './ContactoWhatsapp';
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Modal } from './Modal';

export const InicioLayout = () => {
  //useState para preguntar si el usuario esta en la seccion de login, si lo esta, no se muestra el componente search
  const [showSearch, setShowSearch] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setShowSearch(location.pathname !== '/login')
  }, [location]);

  useEffect(() => {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });
  }, []);

  return (
    <>
      {/* header? */}
      <Header />
      <main className='layout_content'> {/*main*/}
        {showSearch && (
          <>
            <Search />
            <ContactoWhatsapp />
          </>
        )}
        <Outlet></Outlet>
        <Modal/>
      </main>
      <Footer />
    </>
  )
}
