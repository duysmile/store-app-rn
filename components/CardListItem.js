import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Love from '../assets/love.jpg';

const CardListItem = ({ card }) => {
  return (
    <View style={styles.shadow}>
      <View style={styles.container}>
        <Image style={styles.image} source={Love} />
        <View style={styles.info}>
          <Text style={styles.title}>{card.name}</Text>
          <View style={styles.detail}>
            <Text style={styles.time}>24/12/19</Text>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => { }}
            >
              <Text style={styles.textDetail}>Xem chi tiết</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

CardListItem.propTypes = {
  card: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
  },
  container: {
    backgroundColor: '#fff',
    overflow: 'hidden',
  },
  detail: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  time: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    marginBottom: 8,
  },
  textDetail: {
    color: 'lightblue',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    padding: 16,
    borderRadius: 4,
    backgroundColor: '#fff',
    elevation: 5,
    marginBottom: 16,
    marginHorizontal: 8,
  }
});

export default CardListItem;
