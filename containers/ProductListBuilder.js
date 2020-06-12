import React, {useState, useEffect} from 'react';
import {FlatList, StyleSheet, View, Text, ActivityIndicator, RefreshControl} from "react-native";
import SearchBar from "../components/SearchBar";
import ProductItem from "../components/ProductItem";
import ProductModal from "../components/ProductModal";
import ListFooter from "../components/ListFooter"

import {
    fetchProducts,
    refreshProducts,
    searchProduct,
    selectProduct,
    unselectProduct,
    toggleModal,
} from '../store/actions/products';

import {useDispatch, useSelector} from "react-redux";

export default function ProductListBuilder() {
    const filteredProducts = useSelector(state => state.filteredProducts);
    const selectedProduct = useSelector(state => state.selectedProduct);
    const modalVisible = useSelector(state => state.modalVisible);
    const loading = useSelector(state => state.loading);
    const refreshing = useSelector(state => state.refreshing);
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

    //load first page and clear all products in the list
    const onRefreshHandler = () => {
        dispatch(refreshProducts());
        setLoadedPages(1);
    }

    return (
        <View style={styles.screen}>
            <SearchBar
                searchSubmitHandler={searchSubmitHandler}
            />
            <View>
                {
                    filteredProducts.length ?
                        (<FlatList
                            keyExtractor={(item) => item.id.toString()}
                            data={filteredProducts}
                            refreshControl={
                                <RefreshControl
                                    refreshing={refreshing}
                                    onRefresh={onRefreshHandler}
                                />
                            }
                            renderItem={ItemData => (
                                <ProductItem
                                    ItemData={ItemData}
                                    openPopupHandler={openPopupHandler}
                                />
                            )}
                            onEndReachedThreshold={0.4}
                            onEndReached={loadMoreHandler}
                            ListFooterComponent={() => (
                                <ListFooter
                                    loading={loading}
                                />
                            )}
                        />)
                        :
                        !loading && (
                            <View style={styles.emptyMessageContainer}>
                                <Text style={styles.emptyMessageStyle}>No results found</Text>
                            </View>
                        )
                }
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
        padding: 50,
        flex: 1
    },
    emptyMessageContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    emptyMessageStyle: {
        textAlign: 'center',
    }
});