import * as R from 'ramda'

export const  getBooksById = (state, id) => R.prop(id, state.book);

export const  getBook = (state, ownProps) => {
    const activeCategoryId = getActiveCategoryId(ownProps)
    const applySearch = item => R.contains(
        state.bookPage.search,
        R.prop('name', item)
    );

    const applyCategory = item => R.equals(
        activeCategoryId,
        R.prop('categoryId', item)
    );

    const book = R.compose(
        R.filter(applySearch),
        R.when(R.always(activeCategoryId), R.filter(applyCategory)),
        R.map(id => getBooksById(state, id))
    )(state.bookPage.ids);

    return book
};

export const getRenderedBookLength = state => R.length(state.bookPage.ids);

export const getTotalBasketCount = state => R.length(state.basket);

export const getTotalBasketPrice = state => {
    const totalPrice = R.compose(
        R.sum,
        R.pluck('price'),
        R.map(id => getBooksById(state, id))
    )(state.basket);

    return totalPrice
};

export const getCategories = state => R.values(state.categories);

export const getActiveCategoryId = ownProps => R.path(['params', 'id'], ownProps)

export const getBasketBookWithCount = state => {

    const booksCount = id => R.compose(
        R.length,
        R.filter(basketId => R.equals(id, basketId))
    )(state.basket)

    const booksWithCount = books => R.assoc('count', booksCount(books.id), books )

    const uniqueIds = R.uniq(state.basket);
    const book = R.compose(
        R.map(booksWithCount),
        R.map(id => getBooksById(state, id))
    )(uniqueIds)
    return book
};