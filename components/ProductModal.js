import {Button, Text, View, Modal, StyleSheet} from "react-native";
import React from "react";

const ProductModal = ({modalVisible, selectedProduct, closePopupHandler}) => {
    return (
        <Modal visible={modalVisible} animationType="slide">
            <View style={styles.selectedProduct}>
                {selectedProduct && (
                    <View>
                        <Text>Product Details:</Text>
                        <Text>ID: {selectedProduct.id}</Text>
                        <Text>Name: {selectedProduct.name}</Text>
                        <Text>Price: ${selectedProduct.price}</Text>
                        <Button title="Close" onPress={closePopupHandler}/>
                    </View>
                )}
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    selectedProduct: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
export default ProductModal;