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
        <Text style={styles.noteText}>
          {this.props.val.date} {this.props.val.note}
        </Text>
        <Button onPress={this.props.deleteMethod}
          icon={{name: 'delete'}}
          backgroundColor='#03A9F4'
          buttonStyle={{borderRadius: 20, marginLeft: 30, marginRight: 30, marginBottom: 0}}
          title='delete me'>
        </Button>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  noteText: {
    borderBottomWidth: 10,
    paddingLeft: 25
  }
});
