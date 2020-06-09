import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, FlatList} from 'react-native';
const productsData = require('./dataProvider.json');

export default function App() {
  const [searchText, setSearchText] = useState('');
  const [products, setProducts] = useState([...productsData]);

  const searchTextHandler = (text) => {
    setSearchText(text)
  }

  return (
    <View style={styles.screen}>
      <View style={styles.searchBar}>
        <TextInput
            style={styles.textInput}
            placeholder="Search Products..."
            onChangeText={searchTextHandler}
            value={searchText}
        />
      </View>
      <FlatList
          keyExtractor={(item) => item.id}
          data={products}
          renderItem={ItemData => (
              <View style={styles.listItem}>
                <Text>{ItemData.item.name}</Text>
              </View>
          )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  searchBar: {
    alignItems: 'center',
    paddingBottom: 30
  },
  textInput: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10
  },
  listItem: {
    width: '60%',
    backgroundColor: '#ccc',
    padding: 10,
    marginVertical: 10,
    borderColor: 'black',
    borderWidth: 1,
    alignSelf: 'center'
  }
});
