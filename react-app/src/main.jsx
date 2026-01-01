import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from "react-router-dom";
import App from './App.jsx'
import './index.css'
import Navbar from './components/navbar/Navbar.jsx'
import Footer from './components/footer/footer.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <Navbar />
      <App />
      <Footer />
    </HashRouter>
  </StrictMode>,
)
