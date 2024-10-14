import { Link } from 'react-router-dom';
import { Flex } from '@shared/ui';

const NotFound = () => {
	return (
		<Flex style={{ height: '100vh' }} align="center" vertical>
			<h1>Страница не найдена</h1>
			<Link to="/">
				<button>Вернуться на главную</button>
			</Link>
		</Flex>
	);
};

export default NotFound;
