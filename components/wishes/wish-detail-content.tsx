import { Bell, Bookmark, Calendar, Edit3, Link2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import type { WishDetail } from '@/lib/types/wish-detail';

interface WishDetailContentProps {
	wish: WishDetail;
}

export function WishDetailContent({ wish }: WishDetailContentProps) {
	return (
		<div className='p-5'>
			<div
				className={`w-full aspect-square rounded-xl border border-border mb-5 ${wish.bgColor}`}
			/>

			<div className='flex items-center gap-3 mb-4 flex-wrap'>
				<span className='text-3xl font-bold tracking-tight'>
					{wish.price.toLocaleString()} ₽
				</span>
				<span className='text-lg text-muted-foreground line-through'>
					{wish.oldPrice.toLocaleString()} ₽
				</span>
				<Badge className='bg-green-500 hover:bg-green-600 text-white'>
					-{wish.discount}%
				</Badge>
			</div>

			<div className='flex gap-3 mb-4'>
				<Button className='flex-1 gap-2' type='button'>
					🔗 Открыть в магазине
				</Button>
				<Button variant='outline' size='icon' type='button'>
					<Bookmark className='w-4 h-4' />
				</Button>
				<Button variant='outline' size='icon' type='button'>
					<Bell className='w-4 h-4' />
				</Button>
			</div>

			<Separator />

			<div className='my-5'>
				<h3 className='font-semibold mb-2'>Описание</h3>
				<p className='text-muted-foreground leading-relaxed'>{wish.description}</p>
			</div>

			<Separator />

			<div className='my-5'>
				<h3 className='font-semibold mb-3'>Характеристики</h3>
				{wish.specs.map((spec) => (
					<div key={spec.label} className='flex justify-between gap-4 py-1.5'>
						<span className='text-muted-foreground shrink-0'>{spec.label}</span>
						<span className='text-end'>{spec.value}</span>
					</div>
				))}
			</div>

			<Separator />

			<div className='my-5'>
				<div className='flex items-center gap-2 text-muted-foreground mb-2'>
					<Calendar className='w-4 h-4 shrink-0' />
					<span>Добавлено {wish.addedAt}</span>
				</div>
				<div className='flex items-center gap-2 text-muted-foreground'>
					<Link2 className='w-4 h-4 shrink-0' />
					<span className='break-all'>{wish.link}</span>
				</div>
			</div>

			<div className='bg-secondary p-4 rounded-xl'>
				<div className='flex items-center gap-2 mb-2'>
					<Edit3 className='w-4 h-4' />
					<span className='font-medium'>Моя заметка</span>
				</div>
				<p className='text-muted-foreground'>{wish.note}</p>
			</div>
		</div>
	);
}
