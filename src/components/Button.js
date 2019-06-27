import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({someFunction, children}) => {
	return (
		<TouchableOpacity onPress = { someFunction } > 
			<Text> {children} </Text>
		</TouchableOpacity>
	);
};

export default Button;

