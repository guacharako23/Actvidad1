import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Inicio from './components/Inicio';
import Contacto from './components/Contacto';
import Quienessomos from './components/Quienessomos';
import Formulario from './components/Formulario';

function App() {
  return (
    <Router>
      <div style={styles.header}>
        <h1 style={styles.title}>RONALD BARRAZA MONTES</h1>
      </div>
      
      <nav style={styles.navbar}>
        <Link to="/" style={styles.btn}>Inicio</Link>
        <Link to="/contacto" style={styles.btn}>Contacto</Link>
        <Link to="/quienessomos" style={styles.btn}>Nosotros</Link>
        <Link to="/formulario" style={styles.btn}>Descuentos</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/quienessomos" element={<Quienessomos />} />
        <Route path="/formulario" element={<Formulario />} />
      </Routes>
    </Router>
  );
}

const styles = {
  // Estilos del contenedor del título
  header: {
    textAlign: 'center',
    marginBottom: '20px'
  },
  // Estilos del título
  title: {
    color: '#2c3e50',
    fontSize: '2rem',
    margin: 0
  },
  // Estilos de la barra de navegación
  navbar: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px'
  },
  // Estilos de los botones de navegación
  btn: {
    margin: '0 10px',
    padding: '10px 20px',
    backgroundColor: '#2980b9',
    color: 'white',
    fontWeight: 'bold',
    borderRadius: '5px',
    textDecoration: 'none',
    transition: 'background-color 0.3s ease',
    cursor: 'pointer'
  },
  // Estilo para el hover de los botones
  btnHover: {
    backgroundColor: '#3498db'
  }
};

// Añadir efecto de hover mediante eventos de mouse
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('a');
  buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
      button.style.backgroundColor = '#3498db'; // Cambia el color de fondo al pasar el ratón
    });
    button.addEventListener('mouseleave', () => {
      button.style.backgroundColor = '#2980b9'; // Restaura el color original cuando el ratón se va
    });
  });
});

export default App;

