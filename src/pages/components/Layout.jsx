import React from 'react';
import { useColorMode } from '@chakra-ui/react';
import customTheme from '../../utils/theme/index';
import Routes from '../../core/Routes';

const Layout = ({ children }) => {
	const { colorMode, setColorMode } = useColorMode();
	if (colorMode === undefined) setColorMode('light');
	const brandColorTheme = customTheme.colors.mode[colorMode ? colorMode : 'light'];

	return (
		<div style={{ minHeight: '100vh', background: brandColorTheme.background }}>
			<Routes />
		</div>
	);
};

export default Layout;
