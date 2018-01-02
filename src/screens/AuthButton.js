import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, StyleSheet } from 'react-native';
import { NavigationActions } from 'react-navigation';

const styles = StyleSheet.create({
  buttonStyles: {
    margin: 10,
  },
});
const AuthButton = ({ logout, loginScreen, isLoggedIn }) => (
  <Button
    style={styles.buttonStyles}
    title={isLoggedIn ? 'Log Out' : 'Open Login Screen'}
    onPress={isLoggedIn ? logout : loginScreen}
  />
);

// AuthButton.propTypes = {
//   isLoggedIn: PropTypes.bool.isRequired,
//   logout: PropTypes.func.isRequired,
//   loginScreen: PropTypes.func.isRequired,
// };

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch({ type: 'Logout' }),
  loginScreen: () =>
    dispatch(NavigationActions.navigate({ routeName: 'Login' })),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthButton);
