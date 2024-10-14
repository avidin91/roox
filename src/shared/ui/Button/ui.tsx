import { ButtonProps } from './Button.props';
import cn from 'classnames';
import { ReactElement } from 'react';
import './button.css';

export const Button = ({
	appearance,
	size = 'm',
	children,
	className,
	...props
}: ButtonProps): ReactElement => {
	return (
		<button
			className={cn('button', className, {
				['primary']: appearance == 'primary',
				['ghost']: appearance == 'ghost',
				['disabled']: appearance == 'disabled',
				['yellow']: appearance == 'yellow',
				['sizeS']: size == 's',
				['sizeM']: size == 'm',
				['sizeL']: size == 'l',
			})}

			{...props}
		>
			{children}
		</button>
	);
};
