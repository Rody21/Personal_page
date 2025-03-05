function App() {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>¡Hola, soy [Tu Nombre]!</h1>
      <p>Bienvenido a mi página personal.</p>
      <img
        src="https://via.placeholder.com/150"
        alt="Mi foto"
        style={{ borderRadius: "50%" }}
      />
      <h2>Sobre mí</h2>
      <p>Soy un [tu profesión] con experiencia en [tus habilidades].</p>
      <h2>Contacto</h2>
      <p>Email: tuemail@example.com</p>
      <p>LinkedIn: <a href="https://linkedin.com/in/tuusuario" target="_blank" rel="noopener noreferrer">linkedin.com/in/tuusuario</a></p>
    </div>
  );
}

export default App;