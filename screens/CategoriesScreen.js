import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import CategoryListItem from '../components/CategoryListItem';

const listCategories = [
  { id: 1, name: 'Love' },
  { id: 2, name: 'Memories' },
  { id: 3, name: 'Album' },
];

const CategoriesScreen = props => {
  const { navigation } = props;

  const [categories, setCategories] = useState(listCategories);
  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={({ item }) =>
          <CategoryListItem
            onPress={() => {
              navigation.navigate('Category', {
                categoryName: item.name,
              });
            }}
            category={item}
          />
        }
        contentContainerStyle={styles.flatList}
        keyExtractor={item => `${item.id}`}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  flatList: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
  },
});

CategoriesScreen.navigationOptions = ({ navigation }) => ({
  title: 'Home',
});

export default CategoriesScreen;
