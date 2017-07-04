import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import styles from './styles/Styles';

import SignUpScreen from './js/SignUpScreen';
import SignInScreen from './js/SignInScreen';

export default class WelcomeScreen extends Component {
  static navigationOptions = {
    title: 'Welcome',
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          To Continue...
        </Text>
        <Button
          title='Sign In'
          onPress={() => navigate('SignIn')}
        />
        <Button
          title='Sign Up'
          onPress={() => navigate('SignUp')}
        />
      </View>
    );
  }
}

const TheApp = StackNavigator({
  Welcome: { screen: WelcomeScreen },
  SignIn: { screen: SignInScreen },
  SignUp: { screen: SignUpScreen }
});

AppRegistry.registerComponent('TheApp', () => TheApp);
