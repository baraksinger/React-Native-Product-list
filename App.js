import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, FlatList, Modal, TouchableOpacity, Button} from 'react-native';
import SearchBar from './components/SearchBar'
import ProductItem from "./components/ProductItem";
import ProductModal from "./components/ProductModal";

const productsData = require('./dataProvider.json');

export default function App() {
    const [products, setProducts] = useState([...productsData]);
    const [filteredProducts, setFilteredProducts] = useState([...productsData]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);

    const searchSubmitHandler = (event) => {
        let filter = event.nativeEvent.text.toLowerCase();
        let filteredResults = products.filter(product => product.name.toLowerCase().indexOf(filter) > -1)
        setFilteredProducts(filteredResults);
    }

    const openPopupHandler = (productId) => {
        let selected = products.filter(product => product.id === productId);
        setSelectedProduct(selected[0]);
        setModalVisible(true);
    }

    const closePopupHandler = () => {
        setSelectedProduct(null);
        setModalVisible(false);
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
