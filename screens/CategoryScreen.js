import React, { useState } from 'react';
import {
  View,
  FlatList,
  StyleSheet,
} from 'react-native';

import CardListItem from '../components/CardListItem';

const CategoryScreen = props => {
  const [cards, setCards] = useState([
    {
      id: 1,
      name: 'My love',
    },
    {
      id: 2,
      name: 'My love',
    },
    {
      id: 3,
      name: 'My love',
    },
  ]);
  return (
    <View style={styles.wrapper}>
      <FlatList
        data={cards}
        numColumns={2}
        renderItem={({ item }) =>
          <View style={styles.cardWrapper}>
            <CardListItem
              card={item}
            />
          </View>
        }
        keyExtractor={item => `${item.id}`}
        contentContainerStyle={styles.container}
      />
    </View>
  );
};

CategoryScreen.navigationOptions = ({ navigation }) => ({
  title: navigation.getParam('categoryName'),
});

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 16,
  },
  container: {
    paddingHorizontal: 8,
  },
  cardWrapper: {
    flex: 0.5,
  },
});

export default CategoryScreen;
