import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';
import 'focus-visible/dist/focus-visible';
import customTheme from './utils/theme/index';

const breakpoints = createBreakpoints({
	sm: '360px',
	md: '728px',
	lg: '1024px',
	xl: '1440px',
});

const newTheme = {
	...customTheme,
	breakpoints,
};

ReactDOM.render(
	<React.StrictMode>
		<ChakraProvider theme={newTheme}>
			<App />
		</ChakraProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
