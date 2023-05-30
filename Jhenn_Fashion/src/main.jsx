import ReactDOM from 'react-dom/client';
import App from './App.jsx';

//importar bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
//Importar recursos assets
import './assets/fonts/fontawesome-free-6.1.2-web/css/all.css';
import './assets/css/styles.css';
import './assets/css/responsive.css';
import "swiper/css";
import "swiper/css/navigation";


ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)
