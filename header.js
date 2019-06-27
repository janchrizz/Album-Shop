import React from 'react';
import { Text } from 'react-native';

const Header = () => {
	return <Text style={textStyle} > Albums! </Text>;
};

const styles = {
	textStyle: {
		fontSize: 40
	}
};

export default Header;