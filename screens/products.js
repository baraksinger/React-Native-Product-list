import React from 'react';
import {FlatList, StyleSheet, View} from "react-native";
import SearchBar from "../components/SearchBar";
import ProductItem from "../components/ProductItem";
import ProductModal from "../components/ProductModal";

import {searchProduct} from '../store/actions/products';
import {selectProduct} from '../store/actions/products';
import {unselectProduct} from '../store/actions/products';
import {toggleModal} from '../store/actions/products';


import {useDispatch, useSelector} from "react-redux";

export default function Products() {
    const products = useSelector(state => state.productsReducer.products);
    const filteredProducts = useSelector(state => state.productsReducer.filteredProducts);
    const selectedProduct = useSelector(state => state.productsReducer.selectedProduct);
    const modalVisible = useSelector(state => state.productsReducer.modalVisible);

    const dispatch = useDispatch();

    const searchSubmitHandler = (text) => {
        dispatch(searchProduct(text));
    }

    const openPopupHandler = (productId) => {
        dispatch(selectProduct(productId));
        dispatch(toggleModal());
    }

    const closePopupHandler = () => {
        dispatch(unselectProduct())
        dispatch(toggleModal());
    }
    return (
        <View style={styles.screen}>
            <SearchBar
                searchSubmitHandler={searchSubmitHandler}
            />
            <View>
                <FlatList
                    keyExtractor={(item) => item.id.toString()}
                    data={filteredProducts}
                    renderItem={ItemData => (
                        <ProductItem
                            ItemData={ItemData}
                            openPopupHandler={openPopupHandler}
                        />
                    )}
                />
            </View>
            <ProductModal
                modalVisible={modalVisible}
                selectedProduct={selectedProduct}
                closePopupHandler={closePopupHandler}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 50
    }
});