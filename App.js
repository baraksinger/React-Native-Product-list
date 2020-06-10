import React from 'react';
import { Provider} from 'react-redux';
import configureStore from './store/configureStore';
import Products from './screens/products';

const store = configureStore();

export default function App() {
    return (
        <Provider store={store}>
            <Products />
        </Provider>
    );
}
