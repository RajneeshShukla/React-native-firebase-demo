import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import * as firebase from 'firebase';

import { Container, Header, Button, Content, Form, Item, Input, Label } from 'native-base';
// Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyAHsaoAy11v6kRSoan7g40gLO5RpBuQJ5E",
  authDomain: "fir-app-f7e7c.firebaseapp.com",
  databaseURL: "https://fir-app-f7e7c.firebaseio.com",
  projectId: "fir-app-f7e7c",
  storageBucket: "",
  messagingSenderId: "830328664971"
};
firebase.initializeApp(firebaseConfig);

export default class App extends Component {

  constructor() {
    super();

    this.state = {
      email: null,
      password: null
    }
  }

  firebaseSignIn = (email, password) => {
    try {
      firebase.auth().signInWithEmailAndPassword(email, password)
                   .then( function(user){
                     console.log(user);
                   })
    } catch (error) {
      console.log(error.toString())
    }
  }

  firebaseRegistration = (email, password) => {
    try {
        if(this.state.password.length < 6){
          alert("password should have 6 charaters")
        } 
        firebase.auth().createUserWithEmailAndPassword(email, password);
    } catch (error) {
      alert(error.toString())
    }

  }

  render() {
    return (
      <View style={styles.container}>
        <Form>
          <Item floatingLabel>
            <Label>Username</Label>
            <Input  
              onChangeText={ (text)=> this.setState({email: text})}
            />
          </Item>
          <Item floatingLabel last>
            <Label>Password</Label>
            <Input 
            secureTextEntry={true}
            onChangeText={ (text)=> this.setState({password: text})}
            />
          </Item>
          <Button block rounded style={styles.signInBtn}
            onPress={() => this.firebaseSignIn(this.state.email, this.state.password)}
          >
            <Text style={{ color: 'white' }}>Sigin In</Text>
          </Button>

          <Button block rounded style={styles.signInBtn}
            onPress={() => this.firebaseRegistration(this.state.email, this.state.password)}
          >
            <Text style={{ color: 'white' }}>Register</Text>
          </Button>
        </Form>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  signInBtn: {
    marginTop: 20,
    color: 'white'
  }
});
