import React from 'react';
import { Text, View } from 'react-native';

//Functional component
const Header = (props) => {
	
	return (
		<View style={styles.viewStyle}>
			<Text style={styles.textStyle}> {props.headText} by {props.nameText} </Text>
		</View>
		);
};

const styles = {
	viewStyle: {
		backgroundColor: '#F8F8F8', height: 80, justifyContent: 'center',
		alignItems: 'center', paddingTop: 15, shadowColor: 'black',
		shadowOffset: { width: 0, height: 3}, shadowOpacity: 0.4,
		elevation: 3, position: 'relative'
	},
	textStyle: {
		fontSize: 40, fontFamily: 'Cochin' 
	}
};

export default Header;