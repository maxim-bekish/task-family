import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const textVariants = cva('text-foreground', {
	variants: {
		size: {
			regularXS: 'text-xs font-normal leading-normal',
			regularSM: 'text-sm font-normal leading-5',
			regularMD: 'text-base font-normal leading-6',
			mediumXS: 'text-xs font-medium leading-normal',
			mediumSM: 'text-sm font-medium leading-5',
			mediumMD: 'text-base font-medium leading-6',
			semiboldXS: 'text-xs font-semibold leading-normal',
			semiboldSM: 'text-sm font-semibold leading-5',
			semiboldMD: 'text-base font-semibold leading-6',
			boldXS: 'text-xs font-bold leading-normal',
			boldSM: 'text-sm font-bold leading-5',
			boldMD: 'text-base font-bold leading-6',
			h1: 'font-heading text-3xl font-bold leading-tight tracking-tight',
			h2: 'font-heading text-2xl font-bold leading-tight tracking-tight',
			h3: 'font-heading text-xl font-semibold leading-snug tracking-tight',
			h4: 'font-heading text-lg font-semibold leading-snug tracking-tight',
		},
	},
	defaultVariants: {
		size: 'regularMD',
	},
});

type TextTag = keyof Pick<
	React.JSX.IntrinsicElements,
	'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div' | 'label'
>;

type TextSize = NonNullable<VariantProps<typeof textVariants>['size']>;

function defaultTagForSize(size: TextSize): TextTag {
	if (size === 'h1' || size === 'h2' || size === 'h3' || size === 'h4') {
		return size;
	}
	return 'p';
}

type TextProps = VariantProps<typeof textVariants> &
	Omit<React.HTMLAttributes<HTMLElement>, 'children'> & {
		text?: React.ReactNode;
		children?: React.ReactNode;
		tag?: TextTag;
	};

function Text({ text, children, size = 'regularMD', tag, className, ...props }: TextProps) {
	const resolvedSize = size ?? 'regularMD';
	const Comp = tag ?? defaultTagForSize(resolvedSize);

	return (
		<Comp className={cn(textVariants({ size: resolvedSize }), className)} {...props}>
			{children ?? text}
		</Comp>
	);
}

export { Text, textVariants };
