import { Gift, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function FriendDetailActions() {
	return (
		<div className='flex gap-3 p-4'>
			<Button className='flex-1 gap-2' type='button'>
				<MessageCircle className='w-4 h-4' />
				Написать
			</Button>
			<Button variant='outline' size='icon' type='button'>
				<Gift className='w-4 h-4' />
			</Button>
		</div>
	);
}
