import logo from '@shared/img/logo.png';
import { Flex, Text } from '@shared/ui';
import './styles.css';

export const HeaderComponent = () => {

	return (
		<Flex justify='space-between' align='center' className={'header-component'}>
			<img src={logo} alt="logo" />
			<p className={'logo'}>Roox solutions</p>

			<Text extraStrong><a href="tel:+79251002298">+7 (925) 100-22-98</a></Text>
		</Flex>
	);
};