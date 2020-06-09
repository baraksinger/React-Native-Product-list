import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, FlatList} from 'react-native';
const productsData = require('./dataProvider.json');

export default function App() {
  const [searchText, setSearchText] = useState('');
  const [products, setProducts] = useState([...productsData]);
  const [filteredProducts, setFilteredProducts] = useState([...productsData]);

  const searchTextHandler = (text) => {
    setSearchText(text)
  }

  const searchSubmitHandler = (event) => {
    let filter = event.nativeEvent.text.toLowerCase();
    let filteredResults = [];
    for (let product of products) {
      if (product.name.toLowerCase().indexOf(filter) > -1) {
        filteredResults.push(product);
      }
    }
    setFilteredProducts(filteredResults);
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
      <FlatList
          keyExtractor={(item) => item.id}
          data={filteredProducts}
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
