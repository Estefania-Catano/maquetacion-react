import { useState } from "react";

const Formulario = () => {
  const [datos, setDatos] = useState({
    nombre: "",
    correo: "",
    nivel: "Principiante",
    mensaje: ""
  });

  const handleChange = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(datos);
    localStorage.setItem("formulario", JSON.stringify(datos));
  };

  return (
    <form className="form-box" onSubmit={handleSubmit}>

      <label>Nombre completo</label>
      <input name="nombre" placeholder="Ej. Ana Silva" onChange={handleChange} />

      <label>Correo electrónico</label>
      <input name="correo" placeholder="tu@email.com" onChange={handleChange} />

      <label>Nivel de experiencia</label>
      <select name="nivel" onChange={handleChange}>
        <option>Principiante (Nunca he tenido un Bonsái)</option>
        <option>Intermedio (tengo algunos árboles)</option>
        <option>Avanzado (Busco perfecionar técnicas)</option>
      </select>

      <label>Mensaje (Opcional)</label>
      <textarea name="mensaje" placeholder="¿Qué te gustaría aprender?" onChange={handleChange}></textarea>

      <button type="submit">Enviar Solicitud</button>

    </form>
  );
};

export default Formulario;
