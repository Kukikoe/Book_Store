import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import '../navbar/navbar.css';
import basketImg from '../navbar/img/basket.png';

import {
    getTotalBasketCount
} from '../../selectors'

const BasketCart = ({totalBasketCount}) => (
        <Link
            to='/basket'
            className='basket-button'
        >
            <span className="basket-num">{totalBasketCount}</span>
            <img src={basketImg} className="basket-img"/>
        </Link>

);

const  mapStateToProps = state => {
    return {
        totalBasketCount: getTotalBasketCount(state)
    }
};

export  default  connect(mapStateToProps, null)(BasketCart);