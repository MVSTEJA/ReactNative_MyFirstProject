import React from 'react';
import { StyleSheet, FlatList } from 'react-native';

import ListItem from '../ListItem/ListItem';

const styles = StyleSheet.create({
  listContainer: {
    width: '100%',
  },
});

const namesList = props => (
  <FlatList
    data={props.names}
    renderItem={info => (<ListItem
      name={info.item.name}
      placeImage={info.item.image}
      handleItemPressed={() => props.handleItemSelected(info.item.key)}
    />)}
    style={styles.listContainer}
  />
);

export default namesList;
