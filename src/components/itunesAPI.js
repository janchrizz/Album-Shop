import React from 'react';
import { FlatList, ActivityIndicator, Text, View  } from 'react-native';

class FetchExample extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    return fetch('https://itunes.apple.com/search?term=jack+johnson')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson.results,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }



  render(){

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator />
        </View>
      )
    }

    return (
      <View style={{flex: 1, paddingTop:20}}>
        
      <Text> dataSource </Text>
      <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => <Text>{item.kind}, {item.collectionName}</Text>}
          keyExtractor={({artistId}, index) => artistId}
        />
      </View>
    );
  }
}

export default FetchExample;