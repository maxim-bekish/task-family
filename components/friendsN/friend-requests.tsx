import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { friendsPageRequests } from '@/lib/data/friends';
import { Fragment } from 'react/jsx-runtime';
import { Separator } from '../ui/separator';
import { Check, X } from 'lucide-react';

export function FriendRequests() {
	if (friendsPageRequests.length === 0) return null;

	return (
		<div className='  pb-3'>
			<div className='flex items-center justify-between mb-2'>
				<span className='text-sm font-semibold'>
					Запросы ({friendsPageRequests.length})
				</span>
			</div>
			<div className='flex flex-col items-center gap-2 p-3 bg-secondary rounded-lg border border-border'>
				{friendsPageRequests.map((request, index) => (
					<Fragment key={request.id}>
						<div className='flex items-center gap-4 w-full   '>
							<div className='relative'>
								<Avatar size='lg'>
									{request.avatar && <AvatarImage src={request.avatar} alt='' />}
									<AvatarFallback>{request.name.charAt(0)}</AvatarFallback>
								</Avatar>
							</div>
							<div className='flex-1 min-w-0'>
								<p className='font-semibold truncate'>{request.name}</p>
							</div>
							<div className='flex gap-1 shrink-0'>
								<Button size='icon-lg' variant='outline' type='button'>
									<Check />
								</Button>
								<Button size='icon-lg' variant='outline' type='button'>
									<X />
								</Button>
							</div>
						</div>
						{index !== friendsPageRequests.length - 1 && <Separator />}
					</Fragment>
				))}
			</div>
		</div>
	);
}
