import React from 'react';

const Contacto = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>¡Ponte en contacto con nosotros!</h2>
      <p style={styles.text}>Estamos aquí para ayudarte. Si tienes alguna pregunta o sugerencia, no dudes en escribirnos.</p>

      <div style={styles.contactInfo}>
        <p><strong>Email:</strong> contacto@fashionstore.com</p>
        <p><strong>Teléfono:</strong> +123 456 7890</p>
        <p><strong>Dirección:</strong> Calle de la Moda, 123, Ciudad Fashion, País</p>
      </div>

      <div style={styles.socialMedia}>
        <h3 style={styles.socialTitle}>Síguenos en nuestras redes sociales:</h3>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
          <i className="fab fa-facebook" style={styles.icon}></i> Facebook
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
          <i className="fab fa-instagram" style={styles.icon}></i> Instagram
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
          <i className="fab fa-twitter" style={styles.icon}></i> Twitter
        </a>
      </div>
      
      <footer style={styles.footer}>
        <p>&copy; 2024 FashionStore. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

// Estilos en línea
const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    padding: '20px',
    textAlign: 'center',
    backgroundColor: '#f4f4f4',
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '20px',
    color: '#333',
  },
  text: {
    fontSize: '1.2rem',
    marginBottom: '20px',
    color: '#555',
  },
  contactInfo: {
    fontSize: '1rem',
    marginBottom: '30px',
  },
  socialMedia: {
    margin: '30px 0',
  },
  socialTitle: {
    fontSize: '1.5rem',
    marginBottom: '10px',
    color: '#e67e22',
  },
  socialLink: {
    display: 'inline-block',
    margin: '10px',
    textDecoration: 'none',
    fontSize: '1.2rem',
    color: '#333',
  },
  icon: {
    marginRight: '8px',
  },
  footer: {
    marginTop: '40px',
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px',
  },
};

export default Contacto;
