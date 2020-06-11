import React from 'react';
import { Provider} from 'react-redux';
import configureStore from './store/configureStore';
import ProductListBuilder from './containers/ProductListBuilder';

const store = configureStore();

export default function App() {
    return (
        <Provider store={store}>
            <ProductListBuilder />
        </Provider>
    );
}
