import React, { Component } from 'react';
import { View, Text } from 'react-native';
export default class WeatherDetail extends Component {
    render() {
      return <h1>Hello, {this.props.name}</h1>;
    }
  };