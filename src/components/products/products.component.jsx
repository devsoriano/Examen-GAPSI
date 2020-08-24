import React from 'react';
import ProductItem from '../product-item/product-item.component';
import './products.styles.scss';

const Products = ({ products }) => {
  // Componente dónde se renderizara la lista de productos
  return (
    products === null ?
    <h1>Cargando...</h1> : 
    <div className='product-preview'>
      <h1 className='title'>Nuestra lista de productos</h1>
      <div className='preview'>
        {products.map(products => (
            <ProductItem key={products.sku} item={products} />
          ))}
      </div>
    </div>
  )
};

export default Products;
