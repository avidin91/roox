import { ReactElement } from 'react';
import { FlexProps } from './flex.props';
import cn from 'classnames';
import './flex.css';

export const Flex = ({
	children,
	vertical = false,
	wrap,
	gap,
	justify,
	align,
	className,
	...props
}: FlexProps): ReactElement => {
	return (
		<div
			className={cn('flex', className, {
				['vertical']: vertical === true,
				['wrap']: wrap === 'wrap',
				['wrapReverse']: wrap === 'wrap-reverse',
				['gap8']: gap === 8,
				['gap16']: gap === 16,
				['gap24']: gap === 24,
				['gap32']: gap === 32,
				['justifyStart']: justify === 'start',
				['justifyCenter']: justify === 'center',
				['justifySpaceAround']: justify === 'space-around',
				['justifySpaceBetween']: justify === 'space-between',
				['justifySpaceEvenly']: justify === 'space-evenly',
				['alignStretch']: align === 'stretch',
				['alignCenter']: align === 'center',
				['alignStart']: align === 'start',
				['alignEnd']: align === 'end',
			})}
			{...props}
		>
			{children}
		</div>
	);
};
