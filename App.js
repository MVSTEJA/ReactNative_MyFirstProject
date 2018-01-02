import React from 'react';
import { Provider } from 'react-redux';
import { StyleSheet } from 'react-native';

import configureStore from './src/store/configureStore';
import AppWithNavigationState from './src/navigators/AppNavigator';

const store = configureStore();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 20,
  },
});

const App = () => (
  <Provider store={store}>
    <AppWithNavigationState />
  </Provider>
);

export default App;
