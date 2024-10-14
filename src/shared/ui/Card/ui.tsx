import { ReactElement } from 'react';
import { CardProps } from './card.props';
import cn from 'classnames';
import { Flex, Text } from '@shared/ui';
import './card.css';

export const Card = ({ title, children, className, ...props }: CardProps): ReactElement => {
	return (
		<div className={cn('card', className)} {...props}>
			{title && (
				<Flex align="center" className="cardTitle">
					<Text strong>{title}</Text>
				</Flex>
			)}
			<div className="cardBody">{children}</div>
		</div>
	);
};