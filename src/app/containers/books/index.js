import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as R from 'ramda'
import {Link} from 'react-router'

import {getBooksById} from '../../selectors'
import {fetchBooksById, addBooksToBasket} from '../../actions'
import BasketCart from '../../components/basketCart'

class Books extends Component {
    componentDidMount () {
        this.props.fetchBooksById(this.props.params.id)
    }

    renderFields () {
        const {books} = this.props;
        const columnFields = R.compose (
            R.toPairs,
            R.pick([
                'pages'
            ])
        )(books)

        return columnFields.map(([key, value]) => (
            <div className='column' key={key}>
                <div className='ab-details-title'>
                    <p>{key}</p>
                </div>
                <div className='ab-details-info'>
                    {value}
                </div>
            </div>
        ))
    }

    renderContent () {
        const {books} = this.props

        return (
            <div className='thumbnail'>
                <div className='row'>
                    <div className='col-md-6'>
                        <img
                            className='img-thumbnail'
                            src={books.image}
                            alt={books.name}
                        />
                    </div>
                    <div className='col-md-6'>
                        {this.renderFields()}
                    </div>
                </div>
                <div className='caption-full'>
                    <h4 className='pull-right'>${books.price}</h4>
                    <h4>{books.name}</h4>
                    <p>{books.description}</p>
                </div>
            </div>
        )
    }

    renderSidebar () {
        const {books, addBooksToBasket} = this.props
        return (
            <div>
                <p className='lead'>Quick shop</p>
                <BasketCart />
                <div className='form-group'>
                    <h1>{books.name}</h1>
                    <h2>${books.price}</h2>
                </div>
                <Link
                    to='/'
                    className='btn btn-info btn-block'>
                    Back to store
                </Link>
                <button
                    type='button'
                    className='btn btn-success btn-block'
                    onClick={() => addBooksToBasket(books.id)}
                >
                    Add to cart
                </button>
            </div>
        )
    }

    render () {
        const {books} = this.props;
        return (
            <div className='view-container'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-9'>
                            {books && this.renderContent()}
                        </div>
                        <div className='col-md-3'>
                            {books && this.renderSidebar()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        books: getBooksById(state, state.booksPage.id)
    }
};

const mapDispatchToProps = {
    fetchBooksById,
    addBooksToBasket
};

export default connect(mapStateToProps, mapDispatchToProps)(Books)
