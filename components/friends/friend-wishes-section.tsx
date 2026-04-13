import Link from 'next/link';
import type { FriendWishEntry } from '@/lib/types/friend-detail';
import { FriendWishCard } from '@/components/friends/friend-wish-card';

interface FriendWishesSectionProps {
	firstName: string;
	wishes: FriendWishEntry[];
	loadMoreLabel?: string;
	loadMoreHref?: string;
}

export function FriendWishesSection({
	firstName,
	wishes,
	loadMoreLabel = 'Показать ещё 8 желаний →',
	loadMoreHref = '#',
}: FriendWishesSectionProps) {
	return (
		<div className='px-5 py-4'>
			<div className='flex items-center justify-between mb-4'>
				<h2 className='text-base font-semibold'>🎯 Список желаний {firstName}</h2>
			</div>
			<div className='flex flex-col gap-3'>
				{wishes.map((wish) => (
					<FriendWishCard key={wish.id} wish={wish} />
				))}
			</div>
			<div className='mt-4 text-center'>
				<Link href={loadMoreHref} className='text-sm text-muted-foreground'>
					{loadMoreLabel}
				</Link>
			</div>
		</div>
	);
}
