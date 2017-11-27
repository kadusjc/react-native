import React, { Component } from 'react';
import Forecast from '../components/Forecast'

import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,

} from 'react-native';

export default class WeatherProject extends Component<{}> {
  constructor(props) {
    super(props)
    this._handleTextChange = this._handleTextChange.bind(this)
    this.state = {
      zip: '',
      forecast: {
        main: 'Clouds',
        description: 'few clouds',
        temp: 45.7
      }
    }
  }

  _handleTextChange(event) {
    console.log(event.nativeEvent.text)
    this.state.zip = event.nativeEvent.text
  }

  render() {
    console.log('Entrou', this.state)
    return (
        <View style={styles.container}>
          <Text style={styles.welcome}>
            You input {this.state.zip}
          </Text>

          <Forecast
            main={this.state.forecast.main}
            temp={this.state.forecast.temp}
            description={this.state.forecast.description}/>

          <TextInput
            style={styles.input}
            returnKeyType='go'
            onSubmitEditing={this._handleTextChange}>
          </TextInput>

        </View>
    )
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
    fontSize: 18,
    textAlign: 'center',
    margin: 2,
    color: '#FF0011'
  },
  input: {
    fontSize: 18,
    borderWidth: 2,
    height: 40
  }
})
