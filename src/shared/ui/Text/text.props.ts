import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface TextProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
	size?: 's' | 'm' | 'l';
	strong?: boolean;
	extraStrong?: boolean;
	color?: 'white' | 'grey' | 'black';
	children: ReactNode;
}
