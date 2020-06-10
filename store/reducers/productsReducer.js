import {SEARCH_PRODUCT, SELECT_PRODUCT, UNSELECT_PRODUCT, TOGGLE_MODAL} from '../actions/products'

const productsData = require('../../dataProvider.json');

const initialState = {
    products: productsData,
    filteredProducts: productsData,
    selectedProduct: null,
    modalVisible: false
};

const productsReducer = (state = initialState, action) => {
    switch(action.type){
        case SEARCH_PRODUCT:
            let filter = action.productName.toLowerCase();
            let filteredResults = state.products.filter(product => product.name.toLowerCase().indexOf(filter) > -1)
            return {...state, filteredProducts: filteredResults}
        case SELECT_PRODUCT:
            let selected = state.products.filter(product => product.id === action.productId)[0];
            return {...state, selectedProduct: selected};
        case UNSELECT_PRODUCT:
            return {...state, selectedProduct: null};
        case TOGGLE_MODAL:
            return {...state, modalVisible: !state.modalVisible};
        default:
            return state
    }
    return state;
}

export default productsReducer;