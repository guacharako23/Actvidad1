import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Formulario = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Mostrar modal de éxito con SweetAlert
    Swal.fire({
      title: 'Descuento Aplicado!',
      text: 'Has diligenciado tu información correctamente.',
      icon: 'success',
      confirmButtonText: 'Aceptar',
      background: '#ffffff',
      color: '#581845',
      confirmButtonColor: '#581845',
    }).then(() => {
      // Redirigir a la página de "Quiénes somos" con un parámetro en la URL
      navigate('/quienessomos?descuento=aplicado');
    });
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2 style={{ color: '#581845' }}>¡Diligencia tu información para aplicar el 25% de descuento!</h2>
      <form onSubmit={handleSubmit} style={{ display: 'inline-block', marginTop: '20px' }}>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ color: '#581845' }}>
            Nombre:
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
              style={{ marginLeft: '10px', padding: '8px', border: '1px solid #581845', borderRadius: '5px' }}
            />
          </label>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ color: '#581845' }}>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ marginLeft: '10px', padding: '8px', border: '1px solid #581845', borderRadius: '5px' }}
            />
          </label>
        </div>
        <button type="submit" style={{ padding: '10px 15px', backgroundColor: '#581845', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          Aplicar
        </button>
      </form>
    </div>
  );
};

export default Formulario;
