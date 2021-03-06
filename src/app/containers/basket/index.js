import React from 'react'
import {connect} from 'react-redux'
import * as R from 'ramda'
import {Link} from  'react-router'
import './basket.css'
import NavbarMenu from '../../components/navbar/index'
import UserInfo from './userInfo'

import {getBasketBookWithCount, getTotalBasketPrice} from '../../selectors'

import {
    removeBooksFromBasket,
    basketChekout,
    cleanBasket
} from '../../actions'


const Basket = ({
                    book,
                    totalPrice,
                    basketChekout,
                    removeBooksFromBasket,
                    cleanBasket
                }) => {
    const isBasketEmpty = R.isEmpty(book);

    const renderContent = () => {
        return (
            <div>
                {isBasketEmpty && <div>Your shoping cart is empty</div>}
                <div className='table-responcive'>
                    <table className='table-bordered table-striped table-condensed cf'>
                        <tbody>
                        {book.map((books, index) => (
                            <tr
                                key={index}
                                className='item-checout'
                            >
                                <td className='first-column-checkout'>
                                    <img
                                        className='img-thumbnail'
                                        src={books.image}
                                        alt={books.name}
                                    />
                                </td>
                                <td>{books.name}</td>
                                <td>{books.price}</td>
                                <td>{books.count}</td>
                                <td>
                                <span
                                    onClick={() => removeBooksFromBasket(books.id)}
                                    className='delete-cart'
                                />
                                </td>
                            </tr>

                        ))}
                        </tbody>
                    </table>
                </div>
                {
                    R.not(isBasketEmpty) &&
                    <div className='row'>
                        <div className='pull-right total-user-checkout'>
                            <b>Total:</b>
                            ${totalPrice}
                        </div>
                    </div>
                }

            </div>
        )

    }

    const renderSidebar = () => (
        <div>
            <Link
                className='btn btn-info'
                to='/'
            >
                <span className='glyphicon gliphicon-info-sign'/>
                <span>Continue shoping!></span>
            </Link>
            {
                R.not(isBasketEmpty) &&
                <div>
                    <button
                        onClick={cleanBasket}
                        className='btn btn-danger'
                    >
                        <span className='glyphicon glyphicon-trash' />
                        Clear cart
                    </button>
                    <button
                        className='btn btn-success'
                        onClick={() => basketChekout(book)}>
                        <span className='glyphicon glyphicon-envelope'/>
                        Checkout
                    </button>
                </div>
            }
        </div>
    );

    return (
        <div>
            <NavbarMenu/>
            <div className='view-container'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-9'>
                            {renderContent()}
                        </div>
                        <div className='col-md-3 btn-user-checkout'>
                            {renderSidebar()}
                        </div>
                        <UserInfo/>
                    </div>
                </div>
            </div>
        </div>
    )
};


const mapStateToProps = state => {
    return {
        book: getBasketBookWithCount(state),
        totalPrice: getTotalBasketPrice(state)
    }
};

const mapDispatchToProps  = {
    removeBooksFromBasket,
    basketChekout,
    cleanBasket
};

export default connect(mapStateToProps,  mapDispatchToProps)(Basket)