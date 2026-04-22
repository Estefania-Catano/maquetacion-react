import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <h2>El arte de la paciencia</h2>

      <p>Descubre la serenidad a través del Bonsái.</p>

      <button 
        className="btn"
        onClick={() => navigate("/contacto")}
      >
        Reserva un taller
      </button>
    </section>
  );
};

export default Hero;