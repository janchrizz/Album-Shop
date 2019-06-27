import React, {Component} from 'react';
import { Text, ScrollView } from 'react-native';
import AlbumDetail from './AlbumDetail.js';

{/*Common Lifecycle methods:
	render(): when called, examine this.props and this.state and returns something
	constructor(props): super(props) need to be the first statement in constructor, 
	the constructor is called before mounted, 
	used to initialize local state or binding event handlers
	componentDidMount(): called after mounted
	componentDidUpdate(prevProps, prevState, snapshot): invoked after update
	componentWillUnmount(): invoked before unmounted and destroyed
	UNSAFE_componentWillMount(): invoked before mounting and before render
*/}
//Functional Component
class AlbumList extends Component {

	state = {  albums: []};

	componentDidMount() {
		return fetch('https://itunes.apple.com/search?term=taylor+swift&limit=5')
    		.then(response => response.json())
    		.then(json => {
    			this.setState({albums: json.results})
    		})
    		.catch(error => {
        		console.error(error)
      	});
	}//componentDidMount

	renderAlbums() {
		return this.state.albums.map(album => 
			<AlbumDetail key={album.trackId} data={album} />
			);
	}

	render() {
		console.log(this.state)
		if (this.state.albums.length > 0) {
		console.log(this.state.albums[0].kind); 
		}
		
		return (
		<ScrollView>
			{this.renderAlbums()}
		</ScrollView>
		);
	}
}

export default AlbumList;