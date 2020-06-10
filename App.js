import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, FlatList, Modal, TouchableOpacity, Button} from 'react-native';

const productsData = require('./dataProvider.json');

export default function App() {
    const [searchText, setSearchText] = useState('');
    const [products, setProducts] = useState([...productsData]);
    const [filteredProducts, setFilteredProducts] = useState([...productsData]);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const searchTextHandler = (text) => {
        setSearchText(text)
    }

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
            <View style={styles.searchBar}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Search Products..."
                    onChangeText={searchTextHandler}
                    value={searchText}
                    onSubmitEditing={searchSubmitHandler}
                />
            </View>
            <View>
                <FlatList
                keyExtractor={(item) => item.id.toString()}
                data={filteredProducts}
                renderItem={ItemData => (
                    <TouchableOpacity activeOpacity={0.8} onPress={() => openPopupHandler(ItemData.item.id)}>
                        <View style={styles.listItem}>
                            <Text>{ItemData.item.name}</Text>
                        </View>
                    </TouchableOpacity>
                )}
                />
            </View>
            <Modal visible={modalVisible} animationType="slide">
                <View style={styles.selectedProduct}>
                    {selectedProduct && (
                        <View>
                            <Text>Product Details:</Text>
                            <Text>ID: {selectedProduct.id}</Text>
                            <Text>Name: {selectedProduct.name}</Text>
                            <Text>Price: {selectedProduct.price}</Text>
                            <Button title="Close" onPress={closePopupHandler} />
                        </View>
                    )}
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 50
    },
    searchBar: {
        alignItems: 'center',
    },
    textInput: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10
    },
    listItem: {
        width: '80%',
        backgroundColor: '#ccc',
        padding: 10,
        marginVertical: 10,
        borderColor: 'black',
        borderWidth: 1,
        alignSelf: 'center'
    },
    selectedProduct: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
