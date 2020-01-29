import React from 'react';
import PropTypes from 'prop-types';
import {
  Image,
  Text,
  View,
  StyleSheet,
} from 'react-native';
import HeartImage from '../assets/heart.png';

const CategoryListItem = ({category}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{category.name}</Text>
      <Image style={styles.categoryImage} source={HeartImage} />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.3,
    shadowRadius: 10,
    padding: 16,
    borderRadius: 4,
    backgroundColor: '#fff',
    elevation: 5,
    marginBottom: 16,
  },
  categoryImage: {
    width: 64,
    height: 64,
  },
  title: {
    textTransform: 'uppercase',
    marginBottom: 8,
    fontWeight: '700',
  },
});

CategoryListItem.propTypes = {
  category: PropTypes.object.isRequired,
};

export default CategoryListItem;
