import { useColorMode } from '@chakra-ui/color-mode';
import { Stack, Text, Heading } from '@chakra-ui/layout';
import React from 'react';

export default function Project(props) {
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
			<Stack spacing={3} marginBottom={5}>
				<Heading color={`mode.${colorMode}.text`}>Projects</Heading>
				<Text color={`mode.${colorMode}.subtext`}>
					This page displays several projects that I have worked on, both projects from internships
					or personal projects.
				</Text>
			</Stack>
		</Stack>
	);
}
