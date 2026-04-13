import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import type { TMyWish } from '@/lib/types/wish';
import {
	priorityRuNames,
	wishCategoryRuNames,
	wishOccasionRuNames,
} from '@/lib/data/wishes';

interface Props {
	wish: TMyWish;
}

export function WishCard({ wish }: Props) {
	return (
		<Link href={`/wishes/${wish.id}`}>
			<Card size='sm' className='overflow-hidden shadow-sm'>
				<CardContent className='px-3 flex gap-2'>
					{wish.image ? (
						<img
							className='rounded-lg border border-px shadow-lg object-cover w-15 h-15'
							src={wish.image}
							alt={wish.title}
						/>
					) : (
						<Skeleton className='w-15 h-15' />
					)}
					<div className='flex-1 flex flex-col justify-center'>
						<h3 className='font-semibold'>{wish.title}</h3>
						<div className='flex items-center gap-2 mt-1.5'>
							<span className='text-lg font-bold tracking-tight'>
								{wish.price.toLocaleString()} ₽
							</span>
							{wish.oldPrice != null && (
								<span className='text-sm text-muted-foreground line-through'>
									{wish.oldPrice.toLocaleString()} ₽
								</span>
							)}
						</div>
					</div>
					<div className='flex items-center flex-col gap-1 items-end'>
						{wish.priority && (
							<Badge variant='outline'>{priorityRuNames[wish.priority]}</Badge>
						)}
						{wish.category && (
							<Badge variant='outline'>{wishCategoryRuNames[wish.category]}</Badge>
						)}
						{wish.occasions.length > 0 && (
							<Badge variant='outline'>
								{wishOccasionRuNames[wish.occasions[0]]}
							</Badge>
						)}
					</div>
				</CardContent>
			</Card>
		</Link>
	);
}
