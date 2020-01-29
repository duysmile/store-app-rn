import React from 'react';
import { StyleSheet, View } from 'react-native';
import CategoryListItem from './components/CategoryListItem';
import HeartImage from './assets/heart.png';

export default function App() {
  return (
    <View style={styles.container}>
      <CategoryListItem title="Item Title" image={HeartImage}/>
      <CategoryListItem title="Item Title" image={HeartImage}/>
      <CategoryListItem title="Item Title" image={HeartImage}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingLeft: 16,
    paddingRight: 16,
  },
});
