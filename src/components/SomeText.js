import React, {Component} from 'react';
import { Text, View } from 'react-native';

export default class SomeText extends Component {
  render() {
    return ( 
        <Text>Hello {this.props.shit}</Text>
      );
  }
}