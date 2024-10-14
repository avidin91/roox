import './style.css';
import { Flex } from '@shared/ui';
import { FC, forwardRef, MutableRefObject, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '@shared/store/hooks';

interface IProfileCardProps {
	isDisabled: boolean;
	ref: MutableRefObject<null>;
}

export const ProfileCard = forwardRef<HTMLFormElement, IProfileCardProps>(({ isDisabled }, ref) => {
	const {id} = useParams();
	const {users} = useAppSelector(state => state.userStore);
	const user = users.find(user => user.id === Number(id));
	const [name, setName] = useState('')
	const [userName, setUserName] = useState('')

	const onNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (!isDisabled) {
			setName(e.target.value)
		}
	}

	const onUserNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (!isDisabled) {
			setUserName(e.target.value)
		}
	}

	if (!user) {
		return null
	}

	return (
		<div className="profile-card">
			<form ref={ref}>
				<Flex vertical gap={8}>
					<div className="form-example">
						<label htmlFor="name">Name: </label>
						<input onInput={onNameInput}  type="text" name="name" id="name" required placeholder={user.name} value={name}/>
					</div>
					<div className="form-example">
						<label htmlFor="userName">User name: </label>
						<input onInput={onUserNameInput} type="text" name="userName" id="userName" required placeholder={user.username} value={userName}/>
					</div>
					<div className="form-example">
						<label htmlFor="email">E-mail: </label>
						<input type="email" name="email" id="email" required placeholder={user.email}/>
					</div>
					<div className="form-example">
						<label htmlFor="street">Street: </label>
						<input type="text" name="street" id="street" required placeholder={user.address.street}/>
					</div>
					<div className="form-example">
						<label htmlFor="city">City: </label>
						<input type="text" name="city" id="city" required placeholder={user.address.city}/>
					</div>
					<div className="form-example">
						<label htmlFor="zipCode">Zip code: </label>
						<input type="text" name="zipCode" id="zipCode" required placeholder={user.address.zipcode}/>
					</div>
					<div className="form-example">
						<label htmlFor="phone">Phone: </label>
						<input type="tel" name="phone" id="phone" required placeholder={user.phone}/>
					</div>
					<div className="form-example">
						<label htmlFor="website">Website: </label>
						<input type="text" name="website" id="website" required placeholder={user.website}/>
					</div>
				</Flex>
			</form>
		</div>
	);
});
