import { Button, Flex, Text } from '@shared/ui';
import { useAppDispatch } from '@shared/store/hooks';
import { sortUsersByCity, sortUsersByCompany } from '@shared/store/slices/users.slice';

export const UserListSort = () => {
	const dispatch = useAppDispatch();

	const onSortByCity = () => {
		dispatch(sortUsersByCity())
	}

	const onSortByCompany = () => {
		dispatch(sortUsersByCompany())
	}

	return (
		<>
			<Text>Сортировка</Text>
			<Button appearance='primary' onClick={onSortByCity}>по городу</Button>
			<Button appearance='primary' onClick={onSortByCompany}>по компании</Button>
		</>
	);
};

