import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  AsyncStorage,
  KeyboardAvoidingView,
  Image
} from 'react-native';

import MainHeader from './MainHeader';

import Note from './Note';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noteArray: [],
      noteText: '',
    };
  }

  componentDidMount() {
    // AsyncStorageに保存してあるnoteを初期表示
    AsyncStorage.getItem('note').then((value) => {
      (value == null) ? null : this.setState({ noteArray: JSON.parse(value) })
    }).done();
  }

  render() {

    let notes = this.state.noteArray.map((val, key) => {
      return <Note key={key} keyval={key} val={val}
               deleteMethod={ () => this.deleteNote(key) } />
     });

    return (
      <View style={styles.container}>
        <MainHeader />

        <ScrollView style={styles.scrollContainer}>
          {notes}
        </ScrollView>

        <KeyboardAvoidingView behavior="padding" style={styles.footer}>
          <TextInput
            style={styles.textInput}
            onChangeText={(noteText) => this.setState({noteText})}
            value={this.state.noteText}
            placeholder=">note"
            placeholderTextColor="white"
            underlineColoriOS="transparent">
          </TextInput>
        </KeyboardAvoidingView>

        <TouchableOpacity
          onPress={ this.addNote.bind(this) }
          style={styles.addButton}>
          <Text style={styles.addButtonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  addNote() {
    if (this.state.noteText) {
      var d = new Date();
      var today = d.getFullYear() + "/" +
                (d.getMonth()+1) + "/" +
                d.getDate()
      this.state.noteArray.push({
        'date': today,
        'note': this.state.noteText,
      });
      this.setState({ noteArray: this.state.noteArray });
      this.setState({ noteText: '' });

      let note = this.state.noteArray;
      AsyncStorage.setItem('note', JSON.stringify(note))
    }
  }

  deleteNote(key) {
    this.state.noteArray.splice(key, 1);
    this.setState({ noteArray: this.state.noteArray })

    let note = this.state.noteArray;
    AsyncStorage.setItem('note', JSON.stringify(note))
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    backgroundColor: '#E91E63',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 10,
    borderBottomColor: '#ddd',
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    padding: 26,
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 100,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  textInput: {
    alignSelf: 'stretch',
    color: '#fff',
    padding: 20,
    backgroundColor: '#252525',
    borderTopWidth: 2,
    borderTopColor: '#ededed',
  },

  addButton: {
    position: 'absolute',
    zIndex: 11,
    right: 20,
    bottom: 90,
    backgroundColor: '#E91E63',
    width: 45,
    height: 45,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 24
  }
});
