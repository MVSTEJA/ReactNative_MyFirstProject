import React from 'react';

import { Modal, View, Image, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const styles = StyleSheet.create({
  modalContainer: {
    margin: 22,
    display: 'flex',
    flexDirection: 'column',
  },
  placeImage: {
    width: '100%',
    height: 200,
  },
  name: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 28,
  },
  deleteButton: {
    alignItems: 'center',
  },
});

const placeDetail = (props) => {
  let modalContent = null;
  if (props.selectedName) {
    modalContent = (
      <View>
        <Image source={props.selectedName ? props.selectedName.image : null} style={styles.placeImage} />
        <Text style={styles.name}>{props.selectedName.name}</Text>
      </View>
    );
  }
  return (
    <Modal onRequestClose={props.onModalClosed} visible={props.selectedName !== null} animationType="slide">
      <View style={styles.modalContainer}>
        {modalContent}
        <View>
          <TouchableOpacity>
            <View style={styles.deleteButton}>
              <Ionicons name="ios-trash" onPress={props.onItemDeleted} size={30} color="red" />
            </View>
          </TouchableOpacity>
          {/* <Button title="Delete" color="red" onPress={props.onItemDeleted} /> */}
          <Button title="Close" onPress={props.onModalClosed} />
        </View>
      </View>
    </Modal>
  );
};

export default placeDetail;
