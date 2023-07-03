import ReactDOM from 'react-dom/client';
import App from './App.jsx';

//importar jquery
import 'jquery';
import 'jquery/dist/jquery.min.js';
//importar bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
//Importar recursos assets
import './assets/fonts/fontawesome-free-6.1.2-web/css/all.css';
import './assets/css/styles.css';
import './assets/css/responsive.css';
import "swiper/swiper-bundle.min.css";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/effect-creative";
import "swiper/css/navigation";
import "swiper/css/pagination";
//importar animate css
import 'animate.css';
ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)
