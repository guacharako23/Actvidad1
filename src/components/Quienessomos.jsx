import { useEffect, useState } from 'react';
import Card from './Card';

const Quienessomos = () => {
  const [productos, setProductos] = useState([]);
  const [descuentoAplicado, setDescuentoAplicado] = useState(false);

  useEffect(() => {
    obtenerproductos();
  }, []);

  const obtenerproductos = async () => {
    const datos = await fetch('https://fakestoreapi.com/products');
    const prod = await datos.json();
    setProductos(prod);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const descuento = urlParams.get('descuento');
    if (descuento === 'aplicado') {
      setDescuentoAplicado(true);
    }
  }, []);

  return (
    <div>
      <h3 style={{ textAlign: 'center', color: '#581845', margin: '40px 0', fontWeight: 'bold' }}>Lista de Productos</h3> {/* Título centrado, negrita y mayor margen */}
      <div className="container">
        <div className="row">
          {productos.map((producto) => {
            const precioConDescuento = (producto.price * 0.75).toFixed(2);
            return (
              <div className="col-md-4" key={producto.id}>
                <Card
                  url={producto.image}
                  title={producto.title}
                  price={descuentoAplicado ? null : `$${producto.price}`} // Oculta precio original si el descuento está aplicado
                  discountedPrice={descuentoAplicado ? `$${precioConDescuento}` : null} // Precio con descuento
                  description={producto.description}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Quienessomos;
