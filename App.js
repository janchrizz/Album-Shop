import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, Alert } from 'react-native';
import Header from './src/components/headers.js';
import AlbumList from './src/components/AlbumList.js';
import SomeText from './src/components/SomeText.js';
import FetchExample from './src/components/itunesAPI.js';

//See "Linking" documentation to link with other app, eg: browser in our case
//Class component
export default class HelloWorldApp extends Component {
	
  render() {

  	
    return (
      <View style={{flex: 1}}>
        <Header headText={'Albums'} nameText={'Artist'}/>
        <AlbumList/>
        
      </View>

      
    );

  }
}
