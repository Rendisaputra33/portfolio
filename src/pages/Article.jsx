import React from 'react';
import CardSkeleton from './components/Skeleton';
import { Stack } from '@chakra-ui/layout';
import { useColorMode } from '@chakra-ui/color-mode';

export default function Article(props) {
	const { colorMode } = useColorMode();
	return (
		<Stack
			as="main"
			padding="1.5rem"
			color="#2D3748"
			backgroundColor={`mode.${colorMode}.background`}
			marginLeft="auto"
			marginRight="auto"
			maxWidth="48rem"
			paddingTop="3rem">
			<CardSkeleton />
		</Stack>
	);
}
