import React from 'react';
import SHOP_DATA from './shop.data.js';
import axios from 'axios'
import Products from '../../components/products/products.component';

class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: null,
      collections: SHOP_DATA
    };
  }
  
  componentDidMount() {
    axios.get('https://5413ec42-f060-403e-b676-dd7d7b0a0631.mock.pstmn.io/products')
      .then( response => {
        // handle success, seteo de datos para la página de productos
        this.setState({ products: response })
      })
      .catch( error => {
        // handle error
        console.error(error);
      });
  }

  render() {
    const { products } = this.state;
    return (
      <div className='shop-page'>
        <Products 
          products={products !== null ? products.data.data.products : null}
        />
      </div>
    );
  }
}

export default ShopPage;
