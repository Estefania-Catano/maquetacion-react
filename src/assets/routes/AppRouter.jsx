import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Contacto from "../pages/Contacto";
import Filosofia from "../pages/Filosofia";
import Galeria from "../pages/Galeria";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filosofia" element={<Filosofia />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
