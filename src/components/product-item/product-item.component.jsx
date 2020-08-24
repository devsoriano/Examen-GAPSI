import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import { addItem } from '../../redux/cart/cart.actions';

import './product-item.styles.scss';

const ProductItem = ({ item, addItem }) => {
 
  const { name, price, image } = item;

  return (
    <div className='product-item'>
      <div
        className='image'
        style={{
          backgroundImage: `url(${image})`
        }}
      />
      <div className='product-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        Agregar al carrito
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(ProductItem);
