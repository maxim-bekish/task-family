import { MobileStackHeader } from '@/components/layout/header';
import { Button } from '@/components/ui/button';
import { Share2 } from 'lucide-react';

interface WishDetailHeaderProps {
	title: string;
	backHref?: string;
}

export function WishDetailHeader({ title, backHref = '/' }: WishDetailHeaderProps) {
	return (
		<MobileStackHeader
			backHref={backHref}
			title={title}
			right={
				<Button variant='ghost' size='icon' className='w-9 h-9' type='button'>
					<Share2 className='w-5 h-5' />
				</Button>
			}
		/>
	);
}
