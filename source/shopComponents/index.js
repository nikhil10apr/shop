import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Header } from './header/index';
import { Main } from './main';

import '../../styles/base.scss';

const ShopRoot = () => (
  <div className='shop-root'>
    <Header />
    <Main />
  </div>
)

ShopRoot.propTypes = {
  
}

export default ShopRoot;