import React from 'react';
import { Button, Flex } from '@shared/ui';
import './styles.css';
import { NavLink } from 'react-router-dom';

export const Main = () => {
	return (
		<Flex justify='center' align='center' className={'main'}>
			<NavLink to='user-list'	>
				<Button appearance='yellow'>
					Проверить задание
				</Button>
			</NavLink>
		</Flex>
	);
};
