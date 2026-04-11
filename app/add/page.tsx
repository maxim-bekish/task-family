// app/wishes/[id]/page.tsx
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ArrowLeft, Share2, Bookmark, Bell, Calendar, Link2, Edit3 } from 'lucide-react';

// ====== ДАННЫЕ ======
const wishData = {
	id: '1',
	title: 'Nike Air Max Pulse',
	price: 14990,
	oldPrice: 18990,
	discount: 21,
	image: null,
	bgColor: 'bg-[#D4D4D8]',
	description:
		'Легендарные кроссовки Nike Air Max Pulse с улучшенной амортизацией и стильным дизайном. Идеально подходят для повседневной носки и спортивных тренировок. Верх из дышащей сетки, подошва из пеноматериала с вставкой Air Max.',
	specs: [
		{ label: 'Бренд', value: 'Nike' },
		{ label: 'Размеры', value: '39-45' },
		{ label: 'Цвет', value: 'Белый/Чёрный' },
		{ label: 'Артикул', value: 'DM1234-567' },
	],
	addedAt: '12 марта 2024',
	link: 'nike.com/air-max-pulse',
	note: 'Хочу белые с чёрной подошвой, размер 42. Дождаться скидки хотя бы до 12 000 ₽',
};

const navItems = [
	{ label: 'Главная', icon: 'Home', href: '/', isActive: true },
	{ label: 'Друзья', icon: 'Users', href: '/friends', isActive: false },
	{ label: 'Желания', icon: 'Heart', href: '/wishes', isActive: false },
	{ label: 'Профиль', icon: 'User', href: '/profile', isActive: false },
];

// ====== КОМПОНЕНТ ======
export default function WishDetailPage({ params }: { params: { id: string } }) {
	return (
		<div className='flex flex-col min-h-screen bg-white max-w-[440px] mx-auto border-x border-border'>
			{/* Header */}
			<header className='flex items-center px-5 py-4 border-b border-border'>
				<Link href='/'>
					<Button variant='ghost' size='icon' className='w-9 h-9'>
						<ArrowLeft className='w-5 h-5' />
					</Button>
				</Link>
				<h1 className='flex-1 text-base font-semibold text-center truncate px-2'>
					{wishData.title}
				</h1>
				<Button variant='ghost' size='icon' className='w-9 h-9'>
					<Share2 className='w-5 h-5' />
				</Button>
			</header>

			<ScrollArea className='flex-1'>
				<div className='p-5'>
					{/* Image */}
					<div
						className={`w-full aspect-square rounded-xl border border-border mb-5 ${wishData.bgColor}`}
					/>

					{/* Price */}
					<div className='flex items-center gap-3 mb-4'>
						<span className='text-3xl font-bold tracking-tight'>
							{wishData.price.toLocaleString()} ₽
						</span>
						<span className='text-lg text-muted-foreground line-through'>
							{wishData.oldPrice.toLocaleString()} ₽
						</span>
						<Badge className='bg-green-500 hover:bg-green-600 text-white'>
							-{wishData.discount}%
						</Badge>
					</div>

					{/* Actions */}
					<div className='flex gap-3 mb-4'>
						<Button className='flex-1 gap-2'>🔗 Открыть в магазине</Button>
						<Button variant='outline' size='icon'>
							<Bookmark className='w-4 h-4' />
						</Button>
						<Button variant='outline' size='icon'>
							<Bell className='w-4 h-4' />
						</Button>
					</div>

					<Separator />

					{/* Description */}
					<div className='my-5'>
						<h3 className='font-semibold mb-2'>Описание</h3>
						<p className='text-muted-foreground leading-relaxed'>
							{wishData.description}
						</p>
					</div>

					<Separator />

					{/* Specs */}
					<div className='my-5'>
						<h3 className='font-semibold mb-3'>Характеристики</h3>
						{wishData.specs.map((spec) => (
							<div key={spec.label} className='flex justify-between py-1.5'>
								<span className='text-muted-foreground'>{spec.label}</span>
								<span>{spec.value}</span>
							</div>
						))}
					</div>

					<Separator />

					{/* Info */}
					<div className='my-5'>
						<div className='flex items-center gap-2 text-muted-foreground mb-2'>
							<Calendar className='w-4 h-4' />
							<span>Добавлено {wishData.addedAt}</span>
						</div>
						<div className='flex items-center gap-2 text-muted-foreground'>
							<Link2 className='w-4 h-4' />
							<span>{wishData.link}</span>
						</div>
					</div>

					{/* Note */}
					<div className='bg-secondary p-4 rounded-xl'>
						<div className='flex items-center gap-2 mb-2'>
							<Edit3 className='w-4 h-4' />
							<span className='font-medium'>Моя заметка</span>
						</div>
						<p className='text-muted-foreground'>{wishData.note}</p>
					</div>
				</div>
			</ScrollArea>

			{/* Bottom Navigation */}
			<nav className='flex justify-around items-center py-3 px-6 border-t border-border'>
				{navItems.map((item) => {
					const IconComponent = require('lucide-react')[item.icon];
					return (
						<Link
							key={item.href}
							href={item.href}
							className={`flex flex-col items-center gap-1 text-xs font-medium ${
								item.isActive ? 'text-primary' : 'text-muted-foreground'
							}`}>
							<IconComponent className='w-5 h-5' />
							<span>{item.label}</span>
						</Link>
					);
				})}
			</nav>
		</div>
	);
}
