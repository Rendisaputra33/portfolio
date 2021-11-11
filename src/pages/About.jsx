import React from 'react';
import * as Chakra from '@chakra-ui/react';
import { FaGraduationCap } from 'react-icons/fa';
import { BsFillBriefcaseFill } from 'react-icons/bs';
import SMKN4 from '../assets/smkn4.jpg';
import INFORMENT from '../assets/informent.jpg';
import { Carrer, Hero, Skils, Company } from './fragments/About.Fragment';

export default function About(props) {
	const { colorMode } = Chakra.useColorMode();
	const companies = [
		{
			title: 'CV. Informent',
			role: 'Internship as Junior Backend Developer',
			skills: 'Typescript, Javascript, React, PHP, Laravel',
			period: '2021 - 2022',
			logo: INFORMENT,
		},
	];

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
			<Hero colorMode={colorMode} />
			<Skils colorMode={colorMode} />
			<Carrer colorMode={colorMode} companies={companies} Icon={BsFillBriefcaseFill} />
			<Chakra.Stack spacing={4}>
				<Chakra.Heading marginTop="2.5rem">
					<Chakra.Flex alignItems="center">
						<Chakra.Text as="span" color={`mode.${colorMode}.career.text`}>
							Education
						</Chakra.Text>
						<Chakra.Stack pl={2}>
							<Chakra.Box as={FaGraduationCap} color={`mode.${colorMode}.career.subtext`} />
						</Chakra.Stack>
					</Chakra.Flex>
				</Chakra.Heading>
				<Company
					title="SMK Negeri 4 Malang"
					alt="School image"
					role="Student of SMK Negri 4 Malang"
					skills="Programing, Web Dev, Data Structures"
					period="2019 - present"
					logo={SMKN4}
					colorMode={colorMode}
					educat={true}
				/>
			</Chakra.Stack>
		</Chakra.Stack>
	);
}
