import { Button, Flex, Text } from '@shared/ui';
import './style.css';
import { NavLink } from 'react-router-dom';
import React, { useRef, useState } from 'react';
import { ProfileCard } from '@widgets/profile';

export const Profile = () => {
	const [isDisabled, setIsDisabled] = useState(true);
	const ref = useRef<HTMLFormElement>(null);

	const onClickEdit = () => {
		setIsDisabled(false)
	}

	const onSubmitButton = () => {
		if (!isDisabled) {
			ref.current?.submit()
		}
	}

	return (
		<Flex className='profile' justify='center' gap={32}>
			<Flex vertical gap={8} className='profile-aside'>
				<NavLink to='/user-list'>
					<Button appearance='primary'>К списку пользователей</Button>
				</NavLink>
			</Flex>
			<main>
				<Flex vertical gap={8}>
					<Flex justify='space-between'>
						<Text size="m" extraStrong>Профиль пользоваетля</Text>
						<Button appearance='primary' onClick={onClickEdit}>Редактировать</Button>
					</Flex>
					<ProfileCard isDisabled={isDisabled} ref={ref}/>
					<Button onClick={onSubmitButton} className='profile-submit-button' appearance={isDisabled ? 'disabled' : 'primary'}>Отправить</Button>
				</Flex>
			</main>
		</Flex>
	);
};
