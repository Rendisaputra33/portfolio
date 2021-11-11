import React, { useState } from 'react';
import { Box, Heading, Flex, Avatar, IconButton, useColorMode, Link } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { FiSun } from 'react-icons/fi';
import { HiMenuAlt3 } from 'react-icons/hi';
import { FaMoon } from 'react-icons/fa';
import UserIcon from '../../assets/profile.jpeg';

const iconProps = {
	variant: 'ghost',
	size: 'lg',
	isRound: true,
};

const Menu = ({ setShow, path, title }) => {
	const { colorMode } = useColorMode();

	return (
		<Link
			as={NavLink}
			to={path}
			_activeLink={{
				background: colorMode === 'light' ? '#000' : '#252424e0',
				color: '#fff',
			}}
			borderRadius={{ sm: '5px' }}
			mr={{ sm: '0', md: '3' }}
			mt={{ sm: '2', md: '0' }}
			color={`mode.${colorMode}.color`}
			padding="0.7rem"
			display={{ sm: 'block' }}
			_visited={{ outline: 'none' }}
			_hover={{
				background: colorMode === 'light' ? 'rgba(0, 0, 0, 0.7)' : '#463d3de0',
				color: '#fff',
			}}
			onClick={() => setShow(false)}>
			{title}
		</Link>
	);
};

export default function Header(props) {
	const [show, setShow] = useState(false);
	const handleToggle = () => setShow(!show);
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<>
			<Box w="100%" h="6px" bg="gray.300" />
			<Flex
				as="nav"
				align="center"
				justify="space-between"
				wrap="wrap"
				padding="1.5rem"
				color="#2D3748"
				marginLeft="auto"
				marginRight="auto"
				maxWidth="55rem"
				paddingTop="3rem"
				{...props}>
				<Flex
					align="center"
					mr={{ md: '5' }}
					width={{ sm: '100%', md: 'auto' }}
					justifyContent={{ sm: 'space-between', md: 'space-between' }}>
					<Heading as="h1" size="lg" letterSpacing={'-.1rem'}>
						<Avatar name="Rendi Saputra" size={'lg'} src={UserIcon} />
					</Heading>

					<Box display={{ sm: 'block', md: 'none' }} onClick={handleToggle}>
						<HiMenuAlt3 fontSize="2.5rem" color={colorMode === 'light' ? '#000' : '#fff'} />
					</Box>
				</Flex>

				<Box
					display={{ sm: show ? 'block' : 'none', md: 'flex' }}
					width={{ sm: '100%', md: 'auto' }}
					alignItems="center"
					flexGrow={1}>
					<Menu title="About" path="/" setShow={setShow} />
					<Menu title="Articles" path="/articles" setShow={setShow} />
					<Menu title="Repository" path="/repository" setShow={setShow} />
					<Menu title="Projects" path="/projects" setShow={setShow} />
				</Box>
				<Box
					mt={{ sm: 3, md: 0 }}
					position={{ sm: 'absolute', md: 'unset' }}
					top="3.3rem"
					right="5.5rem">
					<IconButton
						aria-label="Color Mode"
						icon={colorMode === 'light' ? <FaMoon /> : <FiSun />}
						onClick={toggleColorMode}
						size="lg"
						isRound={true}
						{...iconProps}
					/>
				</Box>
			</Flex>
		</>
	);
}
