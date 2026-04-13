import Link from 'next/link';
import { ArrowRight, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarBadge, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { friendsList } from '@/lib/data/friends';

export function FriendsHome() {
	return (
		<div className='py-3'>
			<div className='flex items-center justify-between mb-2'>
				<p className='font-semibold flex items-end gap-1'>Друзья</p>
				<Link href='/friends'>
					<Button variant='ghost' size='lg'>
						Все
						<ArrowRight />
					</Button>
				</Link>
			</div>
			<div className='flex gap-4'>
				{friendsList.map((friend) => (
					<Link
						href={`/friends/${friend.id}`}
						key={friend.id}
						className='flex flex-col items-center gap-1.5'>
						<Avatar size='lg'>
							{friend.avatar && <AvatarImage src={friend.avatar} alt='' />}
							<AvatarFallback>{friend.name.charAt(0)}</AvatarFallback>
						</Avatar>
						<span className='text-xs font-medium'>{friend.name}</span>
					</Link>
				))}
				<div className='flex flex-col items-center gap-1.5'>
					<Avatar size='lg'>
						<AvatarFallback>
							<Plus />
						</AvatarFallback>
					</Avatar>
					<span className='text-xs font-medium'>Ещё</span>
				</div>
			</div>
		</div>
	);
}
