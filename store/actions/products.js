export const SEARCH_PRODUCT = 'SEARCH_PRODUCT';
export const SELECT_PRODUCT = 'SELECT_PRODUCT';
export const UNSELECT_PRODUCT  = 'UNSELECT_PRODUCT';
export const TOGGLE_MODAL = 'TOGGLE_MODAL';

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