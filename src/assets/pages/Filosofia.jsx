import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Filosofia = () => {
  return (
    <>
      <Navbar />

      <section className="filosofia">
        <h1>Menos es más</h1>

        <p>
          Nuestra filosofía se centra en la observación y el respeto por los ritmos naturales.
          Creemos que cultivar un Bonsái no es solo jardinería, sino una meditación activa.
        </p>

        <p>
          En nuestro estudio, te enseñamos a escuchar al árbol, entendiendo que cada corte y
          cada alambrado debe tener un propósito. Buscamos el equilibrio perfecto entre la
          intervención humana y la expresión salvaje de la naturaleza.
        </p>
      </section>

      <Footer />
    </>
  );
};

export default Filosofia;
