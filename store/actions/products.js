import axios from '../../axios-products';

export const ADD_PRODUCTS = 'ADD_PRODUCTS'
export const SEARCH_PRODUCT = 'SEARCH_PRODUCT';
export const SELECT_PRODUCT = 'SELECT_PRODUCT';
export const UNSELECT_PRODUCT  = 'UNSELECT_PRODUCT';
export const TOGGLE_MODAL = 'TOGGLE_MODAL';
export const TOGGLE_LOADING = 'TOGGLE_LOADING';
export const SET_END_OF_LIST = 'SET_END_OF_LIST';

export const addProducts = (products) => {
    return { type: ADD_PRODUCTS, products: products }
}

export const searchProduct = (name) => {
    return { type: SEARCH_PRODUCT, productName: name }
}

export const selectProduct = (productId) => {
    return { type: SELECT_PRODUCT, productId: productId}
}

export const unselectProduct = () => {
    return { type: UNSELECT_PRODUCT}
}

export const toggleModal = () => {
    return { type: TOGGLE_MODAL}
}

export const toggleLoading = () => {
    return { type: TOGGLE_LOADING}
}

export const setEndOfList = () => {
    return { type: SET_END_OF_LIST}
}

export const fetchProducts = (page) => {
    return dispatch => {
        dispatch(toggleLoading(true));
        axios.get(`products?page=${page}`)
        .then(response => {
            if (response.data.length > 0) {
                dispatch(addProducts(response.data));
            }
            else {
                dispatch(setEndOfList())
            }
            setTimeout(() => dispatch(toggleLoading(false)), 2000);
        })
        .catch((error) => {
            console.log(error);
            setTimeout(() => dispatch(toggleLoading(false)), 2000);
        });
    };
};