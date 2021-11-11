import * as Chakra from '@chakra-ui/react';
import React from 'react';

export const Company = ({ colorMode, logo, educat = false, title, role, period, skills }) => {
	return (
		<Chakra.Box
			paddingX={4}
			paddingY={5}
			_hover={{ shadow: 'md' }}
			borderColor={`mode.${colorMode}.border`}
			backgroundColor={`mode.${colorMode}.cardBG`}
			position="relative"
			rounded="md">
			<Chakra.Flex justifyContent="space-between">
				<Chakra.Flex>
					<Chakra.Image
						rounded="full"
						height={{ sm: educat ? '4rem' : 'auto', md: 'auto' }}
						width={{ sm: '4rem', md: '14' }}
						objectFit="cover"
						src={logo}
					/>
					<Chakra.Stack spacing={2} pl={3}>
						<Chakra.Heading fontSize="xl" color={`mode.${colorMode}.career.text`}>
							{title}
						</Chakra.Heading>
						<Chakra.Heading fontSize="sm" color={`mode.${colorMode}.career.subtext`}>
							{role}
							<Chakra.Text
								display={{ md: 'none', sm: 'block' }}
								fontSize={14}
								color={`mode.${colorMode}.career.subtext`}>
								{period}
							</Chakra.Text>
						</Chakra.Heading>
					</Chakra.Stack>
				</Chakra.Flex>
				<Chakra.Stack display={{ md: 'block', sm: 'none' }}>
					<Chakra.Text fontSize={14} color={`mode.${colorMode}.career.subtext`}>
						{period}
					</Chakra.Text>
				</Chakra.Stack>
			</Chakra.Flex>
			<Chakra.Stack spacing={2} mt={3} isInline alignItems="center">
				{skills.split(',').map((skill, i) => (
					<Chakra.Tag
						size="sm"
						padding="0 3px"
						key={i}
						color="#228fe9"
						fontWeight="bold"
						// eslint-disable-next-line react/jsx-no-duplicate-props
						color={`mode.${colorMode}.career.subtext`}
						bgColor={`mode.${colorMode}.career.tagBG`}>
						{skill}
					</Chakra.Tag>
				))}
			</Chakra.Stack>
		</Chakra.Box>
	);
};

export const Hero = ({ colorMode }) => {
	// render element
	return (
		<Chakra.Stack spacing={2} marginBottom={8}>
			<Chakra.Heading color={`mode.${colorMode}.text`} display="flex">
				Hi, I'm Rendi{' '}
			</Chakra.Heading>
			<Chakra.Stack as="div" display="flex" flexDirection="row" alignItems="center">
				<Chakra.Box marginBottom={{ md: '4', sm: '3' }} marginTop="4">
					<Chakra.Text color={`mode.${colorMode}.subtext`}>
						I am a Backend developer, an opensource lover and a student from Indonesian.
					</Chakra.Text>
				</Chakra.Box>
				<Chakra.Box></Chakra.Box>
			</Chakra.Stack>
			<Chakra.Text marginTop="1.5" color={`mode.${colorMode}.subtext`}>
				This is my personal website, to share what I'm working on, studying, and what I want to
				learn.
			</Chakra.Text>
		</Chakra.Stack>
	);
};

export const Skils = ({ colorMode }) => {
	return (
		<Chakra.Stack marginBottom={8}>
			<Chakra.Heading color={`mode.${colorMode}.text`}>Skills</Chakra.Heading>
			<Chakra.Stack
				padding={4}
				borderLeft="4px solid"
				borderColor={`mode.${colorMode}.skills.border`}
				color={`mode.${colorMode}.career.subtext`}
				_hover={{ shadow: 'md' }}
				backgroundColor={`mode.${colorMode}.cardBG`}
				rounded="md"
				fontWeight="bold">
				<Chakra.Text>PHP, Laravel, Javascript, Typescript, Java, React, Python</Chakra.Text>
				<Chakra.Text>MySQL, PostgreSQL, Redis</Chakra.Text>
				<Chakra.Text>Heroku, Amazon Web Services</Chakra.Text>
				{/* <Chakra.Text></Chakra.Text> */}
			</Chakra.Stack>
		</Chakra.Stack>
	);
};

export const Carrer = ({ colorMode, Icon, companies }) => {
	return (
		<Chakra.Stack spacing={4} marginBottom={6}>
			<Chakra.Heading color={`mode.${colorMode}.career.text`}>
				<Chakra.Flex marginTop="2.5rem" alignItems="center">
					<Chakra.Text as="span" color={`mode.${colorMode}.career.text`}>
						Career
					</Chakra.Text>
					<Chakra.Stack pl={3}>
						<Chakra.Box as={Icon} size="25px" color={`mode.${colorMode}.career.subtext`} />
					</Chakra.Stack>
				</Chakra.Flex>
			</Chakra.Heading>
			{companies.map((company, index) => (
				<Company
					key={index}
					title={company.title}
					role={company.role}
					skills={company.skills}
					period={company.period}
					logo={company.logo}
					colorMode={colorMode}
				/>
			))}
		</Chakra.Stack>
	);
};
