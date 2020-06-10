import {TextInput, View} from "react-native";
import React, {useState} from "react";

const SearchBar = props => {
    const [searchText, setSearchText] = useState('');

    const searchTextHandler = (text) => {
        setSearchText(text)
    }
    return (
        <View style={styles.searchBar}>
            <TextInput
                style={styles.textInput}
                placeholder="Search Products..."
                onChangeText={searchTextHandler}
                value={searchText}
                onSubmitEditing={props.searchSubmitHandler}
            />
        </View>
    );
}