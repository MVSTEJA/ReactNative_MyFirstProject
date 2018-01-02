import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  tabContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabText: {
    fontSize: 30,
  },
});

export default class SecondScreen extends React.Component {
    static navigationOptions = {
      tabBarLabel: 'Tab2',
    }
    render() {
      return (
        <View
          style={styles.tabContainer}
        >
          <Text style={styles.tabText}>
            This is Tab 2
          </Text>
        </View>
      );
    }
}