import * as Chakra from '@chakra-ui/react';
import React from 'react';
import useRequest from '../hooks/useRequest';
import { Repo } from './fragments/Repo.Fragments';

const url = 'https://rendi-server.herokuapp.com/api/projects';

export default function Repository(props) {
	//
	const { response } = useRequest(url);
	const { colorMode } = Chakra.useColorMode();

	return (
		<Chakra.Stack
			as="main"
			padding="1.5rem"
			color="#2D3748"
			backgroundColor={`mode.${colorMode}.background`}
			marginLeft="auto"
			marginRight="auto"
			maxWidth="48rem"
			paddingTop="3rem">
			<Chakra.Stack spacing={3} marginBottom={5}>
				<Chakra.Heading color={`mode.${colorMode}.text`}>Open Source</Chakra.Heading>
				<Chakra.Text color={`mode.${colorMode}.subtext`}>
					This page lists some of the open source repositories I have published or contributed to.
				</Chakra.Text>
			</Chakra.Stack>
			<Chakra.Stack spacing={4} marginBottom={6}>
				{response &&
					response.map((repo, index) => (
						<Repo
							key={index}
							title={repo.title}
							description={repo.description}
							languages={repo.langs}
							url={repo.url}
							live={repo.url}
							stars={repo.star}
							fork={repo.fork}
							colorMode={colorMode}
						/>
					))}
			</Chakra.Stack>
		</Chakra.Stack>
	);
}
