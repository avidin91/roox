import { Flex } from '@shared/ui';
import './style.css';
import { UserListCards, UserListSort } from '@widgets/user-list';

export const UserList = () => {
	return (
		<Flex className='user-list' justify='center' gap={32}>
			<Flex vertical gap={8} className='user-list-sort'>
				<UserListSort />
			</Flex>
			<main>
				<UserListCards />
			</main>
		</Flex>
	);
};
