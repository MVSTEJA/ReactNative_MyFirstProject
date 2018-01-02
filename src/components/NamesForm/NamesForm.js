import React from 'react';

import { View, TextInput, StyleSheet, Button } from 'react-native';
// import { Button } from 'react-native-elements';

const styles = StyleSheet.create({
  inputContainer: {
    // flex: 1,
    // height: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    display: 'flex',
  },
  inputBox: {
    width: '70%',
    paddingVertical: 7.5,
  },
  inputButton: {
    width: '40%',
    alignSelf: 'flex-end',
  },
});

export default props => (
  <View style={styles.inputContainer}>
    <TextInput
      style={styles.inputBox}
      value={props.state.output}
      onChangeText={props.handleTextInput}
      placeholder="Enter your name!"
    />
    <Button
      style={styles.inputButton}
      title="Add"
      onPress={props.handleSubmitNames}
    />
  </View>);
