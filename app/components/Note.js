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

const users = [
 {
    name: 'brynn',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
 }
]

export default class Note extends Component {
  render() {
    return (
      <Card containerStyle={{padding: 10}} >
        <Text style={styles.noteTextDate}>
          {this.props.val.date}
        </Text>
        <Text style={styles.noteTextNote}>
          {this.props.val.note}
        </Text>
        <Button onPress={this.props.deleteMethod}
          icon={{name: 'delete'}}
          style={styles.deleteButton}
          buttonStyle={{ borderRadius: 100 }}
          backgroundColor='#03A9F4'
          title='DELETE'
          >
        </Button>
      </Card>
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
