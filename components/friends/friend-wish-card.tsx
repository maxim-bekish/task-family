import { Lock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import type { FriendWishEntry } from '@/lib/types/friend-detail';

interface FriendWishCardProps {
	wish: FriendWishEntry;
}

export function FriendWishCard({ wish }: FriendWishCardProps) {
	return (
		<Card className='overflow-hidden shadow-sm'>
			<CardContent className='p-3 flex gap-4'>
				<div
					className={`w-[72px] h-[72px] shrink-0 rounded-lg border border-border ${wish.bgColor}`}
				/>
				<div className='flex-1 min-w-0'>
					<h3 className='font-semibold'>{wish.title}</h3>
					<div className='flex items-center gap-2 mt-1.5 flex-wrap'>
						<span className='text-lg font-bold tracking-tight'>
							{wish.price.toLocaleString()} ₽
						</span>
						{wish.isGift && (
							<Badge variant='secondary' className='bg-yellow-100'>
								🎁 в подарок
							</Badge>
						)}
					</div>
					<p className='text-xs text-muted-foreground mt-1'>Добавлено {wish.addedAt}</p>
				</div>
				{wish.isReserved && (
					<Lock className='w-4 h-4 text-muted-foreground self-center shrink-0' />
				)}
			</CardContent>
		</Card>
	);
}
