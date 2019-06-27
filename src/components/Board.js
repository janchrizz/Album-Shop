import React from 'react';
import { View, Text } from 'react-native';

const Board = (props) => {
	return (
		<View style={styles.listStyles}>
			{props.children}
		</View>
	);
};

const styles = {
	listStyles: {
		borderWidth: 1,
		borderRadius: 2,
		borderColor: 'black',
		borderBottomWidth: 0,
		elevation: 1,
		marginLeft: 5,
		marginRight: 5,
		marginTop: 10,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2},
		shadowOpacity: 0.1,
		shadowRadius: 2,	
	}
}

export default Board;