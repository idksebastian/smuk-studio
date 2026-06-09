import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";
import { Servicios, ServicioDetalle } from "./pages/Servicios";
import Actividades from "./pages/Actividades";
import Testimonios from "./pages/Testimonios";
import ClienteIdeal from "./pages/ClienteIdeal";
import Contacto from "./pages/Contacto";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function Layout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/servicios/:slug" element={<ServicioDetalle />} />
          <Route path="/actividades" element={<Actividades />} />
          <Route path="/testimonios" element={<Testimonios />} />
          <Route path="/cliente-ideal" element={<ClienteIdeal />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}
