import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { friendsList } from '@/lib/data/friends';

export function FriendsList() {
	return (
		<div className='  pb-4'>
			<div className='flex items-center justify-between mb-2'>
				<span className='text-sm font-semibold'>Мои друзья ({friendsList.length})</span>
			</div>
			<div className='flex flex-col gap-2.5'>
				{friendsList.map((friend) => (
					<Link href={`/friends/${friend.id}`} key={friend.id}>
						<div className='flex items-center gap-4 p-3 bg-card rounded-lg border border-border shadow-sm hover:shadow-md transition-shadow'>
							<div className='relative'>
								<Avatar size='lg'>
									{friend.avatar && <AvatarImage src={friend.avatar} alt='' />}
									<AvatarFallback>{friend.name.charAt(0)}</AvatarFallback>
								</Avatar>
							</div>
							<div className='flex-1 min-w-0'>
								<p className='font-semibold truncate'>{friend.name}</p>
								<p className='text-xs text-muted-foreground'>
									{friend.wishesCount} желаний · {friend.lastSeen}
								</p>
							</div>
							<ChevronRight className=' text-muted-foreground shrink-0' />
						</div>
					</Link>
				))}
			</div>
		</div>
	);
}
