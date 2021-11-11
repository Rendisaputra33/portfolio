import * as Chakra from '@chakra-ui/react';
import { AiOutlineStar, AiOutlineShareAlt } from 'react-icons/ai';
import { FiGithub } from 'react-icons/fi';
import { BiBookBookmark } from 'react-icons/bi';
import { HiOutlineExternalLink } from 'react-icons/hi';

export function Repo({ title, description, languages, url, live, colorMode, stars, fork }) {
	return (
		<Chakra.Box
			paddingX={4}
			paddingY={5}
			_hover={{ shadow: 'md' }}
			borderColor={`mode.${colorMode}.border`}
			backgroundColor={`mode.${colorMode}.cardBG`}
			position="relative"
			rounded="md">
			<Chakra.Flex justifyContent="space-between" marginBottom={3}>
				<Chakra.Flex>
					<Chakra.Box as={BiBookBookmark} size="25px" color={`mode.${colorMode}.text`} />
					<Chakra.Stack spacing={2} pl={3}>
						<Chakra.Heading
							isExternal
							as={Chakra.Link}
							href={url}
							fontSize="xl"
							color={`mode.${colorMode}.career.text`}
							cursor="pointer"
							_hover={{ textDecoration: 'underline' }}>
							{title}
						</Chakra.Heading>
					</Chakra.Stack>
				</Chakra.Flex>
				<Chakra.Flex>
					{live && (
						<Chakra.Tooltip hasArrow label="Live" placement="top">
							<Chakra.Link href={live} isExternal>
								<Chakra.Box
									as={HiOutlineExternalLink}
									size="20px"
									color={`mode.${colorMode}.text`}
								/>
							</Chakra.Link>
						</Chakra.Tooltip>
					)}
					<Chakra.Box as={FiGithub} size="20px" marginLeft={4} color={`mode.${colorMode}.text`} />
				</Chakra.Flex>
			</Chakra.Flex>
			<Chakra.Text color={`mode.${colorMode}.career.subtext`}>{description}</Chakra.Text>
			<Chakra.Stack spacing={2} mt={3} isInline alignItems="center">
				{languages.map((language, i) => (
					<Chakra.Tag
						size="sm"
						padding="0 3px"
						key={i}
						color="#4299E1"
						fontWeight="bold"
						// eslint-disable-next-line react/jsx-no-duplicate-props
						color={`mode.${colorMode}.career.subtext`}
						bgColor={`mode.${colorMode}.career.tagBG`}>
						{language}
					</Chakra.Tag>
				))}
				{stars && (
					<Chakra.Flex alignItems="center">
						<Chakra.Box
							as={AiOutlineStar}
							size="18px"
							marginLeft={2}
							color={`mode.${colorMode}.text`}
						/>
						<Chakra.Text marginLeft={2} fontSize={15} color={`mode.${colorMode}.career.subtext`}>
							{stars}
						</Chakra.Text>
					</Chakra.Flex>
				)}
				{fork && (
					<Chakra.Flex alignItems="center">
						<Chakra.Box as={AiOutlineShareAlt} size="18px" color={`mode.${colorMode}.text`} />
						<Chakra.Text marginLeft={2} fontSize={15} color={`mode.${colorMode}.career.subtext`}>
							{fork}
						</Chakra.Text>
					</Chakra.Flex>
				)}
			</Chakra.Stack>
		</Chakra.Box>
	);
}
