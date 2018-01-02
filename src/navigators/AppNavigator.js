import React from 'react';
// import PropTypes from 'prop-types';
import { BackHandler } from 'react-native';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator, NavigationActions, TabNavigator } from 'react-navigation';

import LoginScreen from '../screens/LoginScreen';
import MainScreen from './../screens/MainScreen';
import SecondScreen from './../screens/SecondScreen';
import Main from './../main';

const TabScreen = TabNavigator({
  Tab1: { screen: Main },
  Tab2: { screen: SecondScreen },
}, {
  tabBarOptions: {
    style: {
    //   marginTop: 20,
    },
  },
});

TabScreen.navigatorOptions = {
  title: 'Tab Example',
};

export const AppNavigator = StackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      headerStyle: {
        paddingTop: 30,
        height: 70,
      },
    },
    header: {
      titleStyle: {
        fontSize: 20,
        fontWeight: 'normal',
      },
    },
  },
  Main: {
    screen: MainScreen,
    navigationOptions: {
      headerStyle: {
        paddingTop: 30,
        height: 70,
      },
    },
    header: {
      titleStyle: {
        fontSize: 20,
        fontWeight: 'normal',
      },
    },
  },
  Profile: {
    screen: TabScreen,
    navigationOptions: {
      headerStyle: {
        paddingTop: 30,
        height: 70,
      },
    },
    header: {
      titleStyle: {
        fontSize: 20,
        fontWeight: 'normal',
      },
    },
  },
});

class AppWithNavigationState extends React.Component {
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
  }
  onBackPress = () => {
    const { dispatch, nav } = this.props;
    if (nav.index === 0) {
      return false;
    }
    dispatch(NavigationActions.back());
    return true;
  };
  render() {
    const { dispatch, nav } = this.props;
    return (<AppNavigator
      navigation={addNavigationHelpers({ dispatch, state: nav })}
    />);
  }
}

// AppWithNavigationState.propTypes = {
//   dispatch: PropTypes.func.isRequired,
//   nav: PropTypes.object.isRequired,
// };

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);
