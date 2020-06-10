
import { createStore, combineReducers } from 'redux';

import productsReducer from './reducers/productsReducer'

const rootReducer = combineReducers({
    productsReducer: productsReducer,
})

const configureStore = () => {
    return createStore(rootReducer);
}

export default configureStore;
