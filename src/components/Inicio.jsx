import React from 'react';

const Inicio = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Bienvenidos a FashionStore</h1>
        <p style={styles.tagline}>Tu destino para la moda más actual y a la última tendencia</p>
      </header>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Nuestras Colecciones</h2>
        <p style={styles.sectionText}>
          Explora nuestras colecciones de ropa para hombres, mujeres y niños. Encuentra todo lo que necesitas para cada
          temporada, desde lo casual hasta lo elegante.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Ofertas Especiales</h2>
        <p style={styles.sectionText}>
          No te pierdas nuestras ofertas exclusivas y descuentos. ¡Ahorra mientras te vistes con estilo!
        </p>
      </section>

      <footer style={styles.footer}>
        <p>&copy; 2024 FashionStore. Todos los derechos reservados.</p>
        <p>Contacto: info@fashionstore.com</p>
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
  },
  header: {
    backgroundColor: '#f4f4f4',
    padding: '40px 20px',
    marginBottom: '30px',
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '10px',
  },
  tagline: {
    fontSize: '1.2rem',
    fontStyle: 'italic',
    color: '#777',
  },
  section: {
    margin: '20px 0',
  },
  sectionTitle: {
    fontSize: '2rem',
    marginBottom: '10px',
    color: '#e67e22',
  },
  sectionText: {
    fontSize: '1rem',
    color: '#555',
  },
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px 20px',
    marginTop: '40px',
  }
};

export default Inicio;
