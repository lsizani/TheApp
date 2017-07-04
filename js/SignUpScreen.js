import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  TextInput
} from 'react-native';
import styles from '../styles/Styles';

export default class SignUpScreen extends Component {
  static navigationOptions = {
    title: 'Sign Up',
  };

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      surname: '',
      email: '',
      password: '',
      passwordRepeat: '',
      location: ''
    }
  }

  render() {
    const { navigate } = this.props.navigation;

    return(
      <View>
        <Text>Sign Up</Text>
        <TextInput
          style={styles.signUpInputs}
          placeholder="Name"
          onChangeText={(name) => this.setState({name})}
        />
        <TextInput
          style={styles.signUpInputs}
          placeholder="Surname"
          onChangeText={(surname) => this.setState({surname})}
        />
        <TextInput
          style={styles.signUpInputs}
          placeholder="Email"
          onChangeText={(email) => this.setState({email})}
        />
        <TextInput
          style={styles.signUpInputs}
          placeholder="Choose Password"
          onChangeText={(password) => this.setState({password})}
        />
        <TextInput
          style={styles.signUpInputs}
          placeholder="Repeat Password"
          onChangeText={(passwordRepeat) => this.setState({passwordRepeat})}
        />
        <TextInput
          style={styles.signUpInputs}
          placeholder="Location"
          onChangeText={(location) => this.setState({location})}
        />
      </View>
    )
  }
}