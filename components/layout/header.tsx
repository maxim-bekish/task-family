'use client';

import { cn } from '@/lib/utils';
import { BackButton } from '../back-button';
import { Text } from '../ui/text';
import { usePathname } from 'next/navigation';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { HomeCurrentUser } from '@/lib/types/wish';
import Container from './container';
import { Separator } from '@/components/ui/separator';

interface MobileStackHeaderProps {
	title: string;
	titleClassName?: string;
	className?: string;
	children?: React.ReactNode;
}
const user: HomeCurrentUser = {
	id: '1',
	name: 'Алексей Кузнецов',
	avatar: 'https://github.com/shadcn.png',
};
export function Header({ title, titleClassName, className, children }: MobileStackHeaderProps) {
	const path = usePathname();
	return (
		<>
			<Container>
				<header className={cn('flex items-center py-4 gap-1', className)}>
					{path === '/' ? (
						<div>
							"Logo"
						</div>
						// <Avatar className='w-9 h-9 shadow-sm'>
						// 	{user.avatar && <AvatarImage src={user.avatar} />}
						// 	<AvatarFallback className='bg-primary text-primary-foreground text-xs'>
						// 		{user.name.charAt(0)}
						// 	</AvatarFallback>
						// </Avatar>
					) : (
						<BackButton />
					)}

					<Text
						tag='h1'
						size='h2'
						text={title}
						className={cn('flex-1 text-left truncate px-1', titleClassName)}
					/>

					{children}
				</header>
			</Container>
			<Separator  />
		</>
	);
}
