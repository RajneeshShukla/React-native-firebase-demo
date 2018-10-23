import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import * as firebase from 'firebase';
import { Container, Header, Content, Form, Item, Input, Label, Button } from 'native-base';

// var firebaseConfig = {
//   apiKey: "AIzaSyAHsaoAy11v6kRSoan7g40gLO5RpBuQJ5E",
//   authDomain: "fir-app-f7e7c.firebaseapp.com",
//   databaseURL: "https://fir-app-f7e7c.firebaseio.com",
//   projectId: "fir-app-f7e7c",
//   storageBucket: "",
//   messagingSenderId: "830328664971"
// };

// Initialize firebase app
//firebase.initializeApp(firebaseConfig);


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
          <Text>hello </Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
