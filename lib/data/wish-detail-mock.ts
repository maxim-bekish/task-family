import type { WishDetail } from '@/lib/types/wish-detail';

export const wishDetailMock: WishDetail = {
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

export function getWishDetailMock(id: string): WishDetail {
	return { ...wishDetailMock, id };
}
