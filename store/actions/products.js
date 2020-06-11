import axios from '../../axios-products';

export const ADD_PRODUCTS = 'ADD_PRODUCTS';
export const SET_PRODUCTS = 'SET_PRODUCTS';
export const SEARCH_PRODUCT = 'SEARCH_PRODUCT';
export const SELECT_PRODUCT = 'SELECT_PRODUCT';
export const UNSELECT_PRODUCT  = 'UNSELECT_PRODUCT';
export const TOGGLE_MODAL = 'TOGGLE_MODAL';
export const TOGGLE_LOADING = 'TOGGLE_LOADING';
export const TOGGLE_REFRESHING = 'TOGGLE_REFRESHING';
export const SET_END_OF_LIST = 'SET_END_OF_LIST';

export const addProducts = (products) => {
    return { type: ADD_PRODUCTS, products: products }
}

export const setProducts = (products) => {
    return { type: SET_PRODUCTS, products: products }
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

export const toggleRefreshing = () => {
    return { type: TOGGLE_REFRESHING}
}

export const setEndOfList = (value) => {
    return { type: SET_END_OF_LIST, value: value}
}

export const fetchProducts = (page) => {
    return dispatch => {
        dispatch(toggleLoading());
        axios.get(`products?page=${page}`)
        .then(response => {
            if (response.data.length > 0) {
                dispatch(addProducts(response.data));
            }
            else {
                dispatch(setEndOfList(true))
            }
            setTimeout(() => dispatch(toggleLoading()), 2000);
        })
        .catch((error) => {
            console.log(error);
            setTimeout(() => dispatch(toggleLoading()), 2000);
        });
    };
};

export const refreshProducts = () => {
    return dispatch => {
        dispatch(toggleRefreshing());
        axios.get(`products?page=0`)
        .then(response => {
            if (response.data.length > 0) {
                dispatch(setProducts(response.data));
                dispatch(setEndOfList(false));
            }
            dispatch(toggleRefreshing());
        })
        .catch((error) => {
            console.log(error);
            dispatch(toggleRefreshing());
        });
    };
};