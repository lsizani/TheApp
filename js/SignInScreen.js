import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  TextInput
} from 'react-native';
import styles from '../styles/Styles';

export default class SignInScreen extends Component {
  static navigationOptions = {
    title: 'Sign In',
  };

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  render() {
    const { navigate } = this.props.navigation;

    return(
      <View>
        <Text>Sign In</Text>
        <TextInput
          style={styles.inputs}
          placeholder="Email"
          onChangeText={(email) => this.setState({email})}
        />
        <TextInput
          style={styles.inputs}
          placeholder="Password"
          onChangeText={(password) => this.setState({password})}
        />
      </View>
    )
  }
}