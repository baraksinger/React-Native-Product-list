import React, {useState, useEffect} from 'react';
import {FlatList, StyleSheet, View, ActivityIndicator, Button} from "react-native";
import SearchBar from "../components/SearchBar";
import ProductItem from "../components/ProductItem";
import ProductModal from "../components/ProductModal";

import {
    fetchProducts,
    searchProduct,
    selectProduct,
    unselectProduct,
    toggleModal,
} from '../store/actions/products';

import {useDispatch, useSelector} from "react-redux";

export default function Products() {
    const filteredProducts = useSelector(state => state.filteredProducts);
    const selectedProduct = useSelector(state => state.selectedProduct);
    const modalVisible = useSelector(state => state.modalVisible);
    const loading = useSelector(state => state.loading);
    const endOfList = useSelector(state => state.endOfList);

    const [loadedPages, setLoadedPages] = useState(0);

    const dispatch = useDispatch();

    // load initial products on mount
    useEffect(() => {
        loadMoreHandler();
    }, []);

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

    const loadMoreHandler = () => {
            if (!loading && !endOfList) {
                dispatch(fetchProducts(loadedPages));
                setLoadedPages(loadedPages + 1);
            }
    }


    const renderSeparator = () => {
        return (
            <View
                style={{
                    height: 2,
                    width: '100%',
                    backgroundColor: '#CED0CE'
                }}
            />
        );
    };

    const renderFooter = () => {
        if(!loading){
            return null;
        }
        return (
            <View style={{width: '100%', height: '100%'}}>
                <ActivityIndicator style={{ color: '#000' }} />
            </View>
        );
    };

    return (
        <View style={styles.screen}>
            <SearchBar
                searchSubmitHandler={searchSubmitHandler}
            />
            <FlatList
                keyExtractor={(item) => item.id.toString()}
                data={filteredProducts}
                renderItem={ItemData => (
                    <ProductItem
                        ItemData={ItemData}
                        openPopupHandler={openPopupHandler}
                    />
                )}
                renderSeparator={renderSeparator}
                onEndReachedThreshold={0.4}
                onEndReached={loadMoreHandler}
                ListFooterComponent={renderFooter}
            />
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
        flex: 1,
        padding: 50
    }
});