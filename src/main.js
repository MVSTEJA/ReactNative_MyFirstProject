import React from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';

import NamesList from './components/NamesList/NamesList';
import PlaceDetail from './components/PlaceDetail/PlaceDetail';
import NamesForm from './components/NamesForm/NamesForm';
import { addName, deleteName, deselectName, selectName } from './actions/index';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
});

class Main extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Tab1',
  }
  state = {
    output: '',
  }
  onModalClosed = () => {
    this.props.onDeSelectName();
  }
  onItemDeleted = () => {
    this.props.onDeleteName();
  }
  handleTextInput = (val) => {
    this.setState({
      output: val,
    });
  }
  handleSubmitNames = () => {
    if (this.state.output.trim() === '') {
      return alert('Empty Name');
    }
    this.props.onAddName(this.state.output);
  }
  handleItemSelected = (key) => {
    this.props.onSelectName(key);
  }
  render() {
    // console.log(this.state.selectedName);
    return (
      <View style={styles.container}>
        <PlaceDetail
          selectedName={this.props.selectedName}
          onItemDeleted={this.onItemDeleted}
          onModalClosed={this.onModalClosed}
        />
        <NamesForm
          state={this.state}
          handleSubmitNames={this.handleSubmitNames}
          handleTextInput={this.handleTextInput}
        />
        <NamesList
          names={this.props.names}
          style={styles.listContainer}
          handleItemSelected={this.handleItemSelected}
        />
      </View>
    );
  }
}
const mapStateToProps = state => ({
  names: state.names.names,
  selectedName: state.names.selectedName,
});

const mapDispatchToProps = dispatch => ({
  onAddName: name => dispatch(addName(name)),
  onDeleteName: () => dispatch(deleteName()),
  onSelectName: key => dispatch(selectName(key)),
  onDeSelectName: () => dispatch(deselectName()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
