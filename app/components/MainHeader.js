import React, {Component} from 'react';
import {
  StyleSheet,
} from 'react-native';
import {
  Header
} from 'react-native-elements'

export default class MainHeader extends Component {
  render() {
    return (
      <Header
        leftComponent={{ icon: 'menu', color: '#fff', onPress: () => alert('yeah') }}
        centerComponent={this.renderCenterComponent()}
        rightComponent={{ icon: 'home', color: '#fff', onPress: () => alert('yeah') }}
        outerContainerStyles={{ backgroundColor: '#ffbb70' }}
      />
    );
  }

  renderCenterComponent() {
    return {
      text: 'notes',
      style: { color: '#fff' }
    }
  }
}

const styles = StyleSheet.create({
});
