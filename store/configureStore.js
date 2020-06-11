import { createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import productsReducer from './reducers/productsReducer'

const composeEnhancers = (process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null) || compose;

const configureStore = () => {
    return createStore(productsReducer, composeEnhancers(applyMiddleware(thunk)));
}

export default configureStore;
