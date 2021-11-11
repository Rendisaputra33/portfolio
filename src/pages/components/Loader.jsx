import React from 'react';
import { Spinner, useColorMode } from '@chakra-ui/react';

const innerW = window.innerWidth;

// fragment style
const position = { position: 'absolute', zIndex: 10, flexDirection: 'column' };
const flex = { justifyContent: 'center', alignItems: 'center', height: '100%' };
const screen = colorMode => ({ backgroundColor: colorMode ?? 'white', width: '100%' });
// function styling
const styles = (l = false, colorMode) => ({
	wraper: { display: l ? 'flex' : 'none', ...flex, ...position, ...screen(colorMode) },
	span: {
		fontSize: innerW < 600 ? 14 : 20,
		marginTop: 20,
		color: colorMode === 'dark' ?? '',
	},
});
// componeny loader
export default function Loader({ loading }) {
	const { colorMode } = useColorMode();
	return (
		<div style={styles(loading, colorMode).wraper}>
			<Spinner size={innerW < 600 ? 'md' : 'xl'} color={colorMode === 'dark' ? 'white' : ''} />
			<span style={styles(loading, colorMode).span}>Loading....</span>
		</div>
	);
}
