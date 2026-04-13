import { MobileStackHeader } from '@/components/layout/header';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import type { HomeCurrentUser } from '@/lib/types/wish';
import { Plus } from 'lucide-react';
import Link from 'next/link';

interface HomeHeaderProps {
	user: HomeCurrentUser;
	title: string;
	addHref: string;
	profileHref?: string;
}

export function HomeHeader({ user, title, addHref, profileHref = '/profile' }: HomeHeaderProps) {
	return (
		<MobileStackHeader
			title={title}
			left={
				<Link
					href={profileHref}
					className='inline-flex shrink-0 rounded-full ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'>
					<Avatar className='w-9 h-9 shadow-sm'>
						<AvatarImage src={user.avatar || undefined} />
						<AvatarFallback className='bg-primary text-primary-foreground text-xs'>
							{user.initials}
						</AvatarFallback>
					</Avatar>
				</Link>
			}
			right={
				<Link href={addHref}>
					<Button
						variant='ghost'
						size='icon'
						className='w-9 h-9'
						aria-label='Добавить желание'>
						<Plus className='w-5 h-5' />
					</Button>
				</Link>
			}
		/>
	);
}
