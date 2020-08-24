import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import logo from '../../assets/logo.png';

import './header.styles.scss';

const Header = ({ hidden }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <img src={logo} alt="logo" />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        TIENDA
      </Link>
      <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);

const mapStateToProps = createStructuredSelector({
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
