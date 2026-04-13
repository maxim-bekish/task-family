import { Plus, CakeSlice, Users } from 'lucide-react';
import Link from 'next/link';

import Container from '@/components/layout/container';
import { Header } from '@/components/layout/header';

import { FriendsHome } from '@/components/friendsN/friends-home';
import { WishCard } from '@/components/wishN/wish-card';

import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Text } from '@/components/ui/text';

import { friendsList } from '@/lib/data/friends';
import { myWishes } from '@/lib/data/wishes';

export default function HomePage() {
	return (
		<>
			<Header title='Главная'/>

			<Container>
				<div className='flex gap-2 py-2'>
					<Badge variant='secondary'>
						<CakeSlice /> {myWishes.length} желаний
					</Badge>
					<Badge variant='secondary'>
						<Users /> {friendsList.length} друзей
					</Badge>
				</div>
			</Container>

			<Container>
				<FriendsHome />
			</Container>

			<Separator />

			<Container>
				<div className='flex items-center justify-between'>
					<Text
						tag='h2'
						size='h2'
						text='Мои желания'
						className='flex-1 text-left truncate py-4 '
					/>
					<Button asChild variant='ghost' size='icon-lg' aria-label='Добавить желание'>
						<Link href='/add-wish'>
							<Plus />
						</Link>
					</Button>
				</div>
				<div className='flex flex-col gap-3'>
					{myWishes.map((wish) => (
						<WishCard key={wish.id} wish={wish} />
					))}
				</div>
			</Container>
		</>
	);
}
