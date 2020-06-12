import {StyleSheet, TextInput, View} from "react-native";
import React from "react";

const SearchBar = ({searchTextHandler, searchText}) => {
    return (
        <View style={styles.searchBar}>
            <TextInput
                style={styles.textInput}
                placeholder="Search Products..."
                onChangeText={searchTextHandler}
                value={searchText}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    searchBar: {
        alignItems: 'center',
    },
    textInput: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10
    }
});

export default SearchBar;