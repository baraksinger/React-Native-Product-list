import {
    ADD_PRODUCTS,
    SEARCH_PRODUCT,
    SELECT_PRODUCT,
    UNSELECT_PRODUCT,
    TOGGLE_MODAL,
    TOGGLE_LOADING,
    SET_END_OF_LIST
} from '../actions/products'

const initialState = {
    products: [],
    filteredProducts: [],
    selectedProduct: null,
    modalVisible: false,
    loadedPages: 0,
    loading: false,
    endOfList: false
};

const productsReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_PRODUCTS:
            let updatedProducts =  state.products.concat(action.products);
            return {...state, products: updatedProducts, filteredProducts: updatedProducts}
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
        case TOGGLE_LOADING:
            return {...state, loading: !state.loading};
        case SET_END_OF_LIST:
            console.log('state endoflist is:', state.endOfList);
            return {...state, endOfList: true}
        default:
            return state
    }
    return state;
}

export default productsReducer;