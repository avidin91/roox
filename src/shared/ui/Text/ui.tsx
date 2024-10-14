import { ReactElement } from 'react';
import { TextProps } from './text.props';
import cn from 'classnames';
import './text.css';

export const Text = ({
	size = 'm',
	strong = false,
	extraStrong = false,
	children,
	color = 'black',
	className,
	...props
}: TextProps): ReactElement => {
	return (
		<p
			className={cn('text', className, {
				['s']: size === 's',
				['m']: size === 'm',
				['l']: size === 'l',
				['strong']: strong === true,
				['extraStrong']: extraStrong === true,
				['white']: color === 'white',
				['grey']: color === 'grey',
				['black']: color === 'black',
			})}
			{...props}
		>
			{children}
		</p>
	);
};
