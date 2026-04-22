import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Formulario from "../components/Formulario";

const Contacto = () => {
  return (
    <>
      <Navbar />

      <section className="contacto">
        <h1>Reserva un Taller</h1>
        <p>
          Déjanos tus datos y nos pondremos en contacto para agendar tu primera sesión.
        </p>

        <Formulario />
      </section>

      <Footer />
    </>
  );
};

export default Contacto;
