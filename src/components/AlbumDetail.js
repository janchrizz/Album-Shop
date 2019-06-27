import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Board from './Board.js';
import BoardSection from './BoardSection.js';
import Button from './Button.js';

const AlbumDetail = (props) => {

	return (
		<Board>
			<BoardSection>
			<View style={styles.imageBorderStyle}>
				<Image 
					source={{uri: props.data.artworkUrl100}} 
					style={styles.imageStyle}
				/>
			</View>
			<View style={styles.viewStyle}>
				<Text>{props.data.trackName} in {props.data.collectionName}</Text>
				<Text>{props.data.primaryGenreName}</Text>
			</View>
			</BoardSection>

			<BoardSection>
				<Image 
					source={{uri: props.data.artworkUrl100}} 
					style={styles.artStyle}
				/>
			</BoardSection>

			<BoardSection>
				//change the url below
				<Button someFunction = { () => Linking.openURL(props.data.previewUrl) }>
					Listen
				</Button>
			</BoardSection>

		</Board>
	);
};

const styles = { 
	viewStyle: {
		justifyContent: 'space-around',
		flexDirection: 'column',
	},
	imageStyle: {
		height: 50,
		width: 50
	},
	imageBorderStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 1,
		marginRight: 10
	},
	artStyle: {
		height: 250,
		flex: 1,
		flexDirection: 'row',
		resizeMode: 'stretch'
	}
}
export default AlbumDetail;
