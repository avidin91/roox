import React, { FC } from 'react';
import { Button, Flex, Text } from '@shared/ui';
import './style.css';
import { NavLink } from 'react-router-dom';

interface IUserCardProps {
	id: number;
	name?: string;
	city?: string;
	company?: string;
}

export const UserCard: FC<IUserCardProps> = ({name, city, company, id}) => {
	if (!name && !city && !company) {
		return null
	}

	return (
		<Flex className='user-card' justify='space-between'>
			<Flex vertical>
				{name && <Flex gap={8}>
					<Text color='grey'>ФИО:</Text>
					<Text>{name}</Text>
				</Flex>}
				{city && <Flex gap={8}>
					<Text color='grey'>город:</Text>
					<Text>{city}</Text>
				</Flex>}
				{company && <Flex gap={8}>
					<Text color='grey'>компания:</Text>
					<Text>{company}</Text>
				</Flex>}
			</Flex>
			<NavLink to={`/profile/${id}`}>
				<Button appearance='ghost'>Подробнее</Button>
			</NavLink>
		</Flex>
	);
};
