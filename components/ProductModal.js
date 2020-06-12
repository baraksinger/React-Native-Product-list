import {Button, Text, View, Modal, StyleSheet, Image} from "react-native";
import React from "react";

const ProductModal = ({modalVisible, selectedProduct, closePopupHandler}) => {
    return (
        <Modal visible={modalVisible} animationType="slide">
            <View style={styles.selectedProduct}>
                {selectedProduct && (
                    <View>
                        <Text>Product Details:</Text>
                        <Text>Name: {selectedProduct.name}</Text>
                        <View style={styles.imageContainer}>
                            <Image
                                source={{uri: selectedProduct.image}}
                                style={styles.image}
                                resizeMode="cover"
                            />
                        </View>
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
    },
    imageContainer: {
        width: 300,
        height: 300,
        overflow: 'hidden',
        marginVertical: 30
    },
    image: {
        width: '100%',
        height: '100%'
    }
});
export default ProductModal;