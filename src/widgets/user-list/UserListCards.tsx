import React, { useEffect } from 'react';
import { Flex, Text } from '@shared/ui';
import { UserCard } from '@entities/user-card';
import { useAppDispatch, useAppSelector } from '@shared/store/hooks';
import { fetchUsers } from '@shared/store/slices/users.slice';

export const UserListCards = () => {
	const dispatch = useAppDispatch();
	const { isLoading, users } = useAppSelector(state => state.userStore);

	useEffect(() => {
		dispatch(fetchUsers());
	}, []);

	return (
		<Flex vertical gap={8}>
			<Text size="m" extraStrong>Список пользователей</Text>
			{isLoading ?
				<Text extraStrong size="l">...is Loading</Text> :
				users.map(user => (
					<UserCard
						key={user.id}
						id={user.id}
						name={user.name}
						city={user.address.city}
						company={user.company.name} />
				))
			}
		</Flex>
	);
};

