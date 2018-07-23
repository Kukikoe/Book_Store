import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import * as R from 'ramda'

import {
    fetchBook,
    loadMoreBook,
    addBooksToBasket,
    fetchCategories,
    removeBookIfAdmin
} from '../../actions'
import  {getBook} from '../../selectors'
import {getUserIsAdmin} from '../../userSelector';


class Book extends Component {
    componentDidMount () {
        this.props.fetchBook();
        this.props.fetchCategories()

    }

    renderBooks (books, index){
        const {addBooksToBasket} =this.props;
        const {removeBookIfAdmin} =this.props;
        const shortDescription = `${R.take(60, books.description)}`;
        return(
            <div className='col-sn-4 col-lg-4 col-md-4 book-list' key={index}>
                <div className='thumbnail'>
                    <img
                        className='img-thumbnail'
                        src={books.image}
                        alt={books.name}
                    />
                    <div className='caption'>
                        <h4 className='pull-right'>${books.price}</h4>
                        <h4>
                            <Link to={`/book/${books.id}`}>
                                {books.name}
                            </Link>
                        </h4>
                        <p>{shortDescription}</p>
                        <div className='itemButton'>
                            <button className='btn btn-primary' onClick={() => addBooksToBasket(books.id)}>
                                Buy now!
                            </button>
                            <Link
                                to={`/book/${books.id}`}
                                className='btn btn-default'>
                                More info
                            </Link>
                            <div style={{display: this.props.showDeleteBookButton ? 'block': 'none'}}>
                                <button className='btn btn-dark' onClick={() => removeBookIfAdmin(books.id)}>
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    render () {
        const {book, loadMoreBook} = this.props;
        return (
            <div>
                <div className='books row'>
                    {book.map((books, index) => this.renderBooks(books, index))}
                </div>
                <div className='row'>
                    <div className='col-md-12'>
                        <button
                            onClick={loadMoreBook}
                            className='pull-right btn btn-primary'
                        >
                            Load More
                        </button>
                    </div>
                </div>
            </div>

        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        book: getBook(state, ownProps),
        showDeleteBookButton: getUserIsAdmin(state)
    }
};

const  mapDispatchToProps  = {
        fetchBook,
        loadMoreBook,
        addBooksToBasket,
        fetchCategories,
        removeBookIfAdmin
};

export  default connect(mapStateToProps, mapDispatchToProps)(Book)
