import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Sidebar } from "./Sidebar";
import { Navbar } from "./Navbar";

export const PrivateLayout = () => {
  const [toggle, setToggle] = useState(false);
  const location = useLocation();

  useEffect(() => {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });
  }, [location]);

  const handToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>

      <div className="d-flex">
        <div className={toggle ? 'd-none' : 'w-auto position-fixed'}>
          <Sidebar />
        </div>
        <div className={toggle ? 'd-none' : 'invisible'}>
          <Sidebar />
        </div>
        <div className="col">
          <Navbar handToggle={handToggle} />
          <Outlet></Outlet>
        </div>
      </div>


    </>
  )
}
