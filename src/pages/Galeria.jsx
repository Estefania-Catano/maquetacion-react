import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";

const Galeria = () => {
    const bonsais = [
        "Arce Japonés",
        "Pino Negro",
        "Ficus Retusa",
        "Olmo Chino",
        "Enebro",
        "Azalea"
    ];

    return (
        <>
            <Navbar />

            <section className="galeria">
                <h1>Nuestra Colección</h1>
                <p>
                    Un vistazo a algunos de los ejemplares en los que hemos trabajado. 
                    Cada árbol cuenta una historia de tiempo y paciencia.
                </p>

                <div className="grid">
                    {bonsais.map((item, index) => (
                        <Card key={index} titulo={item} />
                    ))}
                </div>
            </section>

            <Footer />
        </>
    );
};

export default Galeria;
