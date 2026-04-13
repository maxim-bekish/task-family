import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { mutualFriends } from '@/lib/data/friends';

export function FriendsMutual() {
	return (
		<div className='  py-4'>
			<div className='flex items-center justify-between mb-2'>
				<span className='text-sm font-semibold'>Возможно, вы знакомы</span>
			</div>
			{mutualFriends.map((suggestion) => (
				<div key={suggestion.id} className='flex items-center gap-4 p-3'>
					<Avatar size='lg'>
						{suggestion.avatar && <AvatarImage src={suggestion.avatar} alt='' />}
						<AvatarFallback>{suggestion.name.charAt(0)}</AvatarFallback>
					</Avatar>
					<div className='flex-1 min-w-0'>
						<p className='font-semibold truncate'>{suggestion.name}</p>
						<p className='text-xs text-muted-foreground'>
							{suggestion.mutualFriends} общих друга
						</p>
					</div>
					<Button variant='outline' size='sm' className='h-8 shrink-0' type='button'>
						Добавить
					</Button>
				</div>
			))}
		</div>
	);
}
