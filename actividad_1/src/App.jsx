import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Inicio from './components/Inicio';
import Contacto from './components/Contacto';
import Quienessomos from './components/Quienessomos';
import Formulario from './components/Formulario';

function App() {
  return (
    <Router>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h1 style={{ color: 'black', fontSize: '1.1rem' }}>Jesus Sanjuan A.</h1> {/* Título centrado y más pequeño */}
      </div>
      <nav style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <Link to="/" className="btn" style={{ margin: '0 10px', backgroundColor: 'black', color: 'white', fontWeight: 'bold' }}>Inicio</Link>
        <Link to="/contacto" className="btn" style={{ margin: '0 10px', backgroundColor: 'black', color: 'white', fontWeight: 'bold' }}>Contacto</Link>
        <Link to="/quienessomos" className="btn" style={{ margin: '0 10px', backgroundColor: 'black', color: 'white', fontWeight: 'bold' }}>Nosotros</Link>
        <Link to="/formulario" className="btn" style={{ margin: '0 10px', backgroundColor: 'black', color: 'white', fontWeight: 'bold' }}>Descuentos</Link>
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

export default App;
