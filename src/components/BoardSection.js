import React from 'react';
import { View } from 'react-native';

const BoardSection = (props) => {
	return (
		<View style={styles.listStyles}>
			{props.children}
		</View>
	);
};


//justifyContent options: center, space-between, space-around, flex-end, flex-start
//flexDirection options: row, column


const styles = {
	listStyles: {
		backgroundColor: '#fff',
		borderWidth: 1,
		borderColor: 'black',
		borderBottomWidth: 1,
		flexDirection: 'row',
		justifyContent: 'flex-start',
		padding: 5,
		position: 'relative'	
	}
}

export default BoardSection;