import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const [searchText, setSearchText] = useState('');

  const searchTextHandler = (text) => {
    setSearchText(text)
  }

  return (
    <View>
      <View style={styles.searchBar}>
        <TextInput
            style={styles.textInput}
            placeholder="Search Products..."
            onChangeText={searchTextHandler}
            value={searchText}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    padding: 50,
    alignItems: 'center'
  },
  textInput: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10
  },
});
