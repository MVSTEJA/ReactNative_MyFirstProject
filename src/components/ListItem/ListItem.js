import React from 'react';

import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

const styles = StyleSheet.create({
  listItem: {
    width: '100%',
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#eee',
    flexDirection: 'row',
    alignItems: 'center',
  },
  placeImage: {
    marginRight: 8,
    height: 30,
    width: 30,
  },
});

const listItem = props => (
  <TouchableOpacity onPress={props.handleItemPressed}>
    <View style={styles.listItem}>
      <Image
        style={styles.placeImage}
        resizeMode="cover"
        source={props.placeImage}
      />
      <Text
        style={styles.listItem}
      >
        {props.name}
      </Text>
    </View>
  </TouchableOpacity>

);

export default listItem;
