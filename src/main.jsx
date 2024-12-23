import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "@fortawesome/fontawesome-free/css/all.min.css"
// import "bootstrap/dist/css/bootstrap.min.css"
import './index.css'
import App from './App.jsx'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'flowbite';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)