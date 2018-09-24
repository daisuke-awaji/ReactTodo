/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {
  Card,
  ListItem,
  Button,
  Icon,
} from 'react-native-elements'

export default class Note extends Component {
  render() {
    return (
      <ListItem
        title={this.props.val.note}
        subtitle={this.props.val.date}
        rightIcon={{ name: 'delete' }}
        onPress={this.props.deleteMethod}
      />
    );
  }
}

const styles = StyleSheet.create({
  noteTextDate: {
    borderBottomWidth: 10,
    paddingLeft: 25,
    fontSize: 15
  },
  noteTextNote: {
    borderBottomWidth: 10,
    paddingLeft: 25,
    fontSize: 25
  },
  deleteButton: {
    alignItems: 'baseline'
  }
});
