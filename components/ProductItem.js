import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";

const ProductItem = ({openPopupHandler, ItemData}) => {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={() => openPopupHandler(ItemData.item.id)}>
            <View style={styles.listItem}>
                <Text>{ItemData.item.name}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    listItem: {
        width: '80%',
        backgroundColor: '#ccc',
        padding: 10,
        marginVertical: 10,
        borderColor: 'black',
        borderWidth: 1,
        alignSelf: 'center'
    }
});

export default ProductItem;