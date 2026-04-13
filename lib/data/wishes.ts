import type { TMyWish } from '@/lib/types/wish';
import type { TPriority, TWishCategory, TWishOccasion } from '@/lib/types/wish';

export const myWishes: TMyWish[] = [
	{
		id: '1',
		title: 'Nike Air Max Pulse',
		price: 14990,
		oldPrice: 18990,
		image: 'https://github.com/shadcn.png',
		priority: 'high',
		category: 'clothing',
		occasions: ['birthday', 'new_year'],
	},
	{
		id: '2',
		title: 'Винтажная джинсовка',
		price: 8490,
		image: 'https://github.com/shadcn.png',
		priority: 'medium',
		category: 'clothing',
		occasions: ['no_occasion'],
	},
	{
		id: '3',
		title: 'Механическая клавиатура',
		price: 19990,
		priority: 'low',
		category: 'electronics',
		occasions: ['birthday', 'feb_23'],
	},
];

export const wishCategoryRuNames: Record<TWishCategory, string> = {
	clothing: 'Одежда и обувь',
	electronics: 'Электроника',
	home: 'Дом и быт',
	books: 'Книги',
	games: 'Игры',
	beauty: 'Красота',
	sports: 'Спорт',
	kids: 'Детям',
	auto: 'Авто',
	hobby: 'Хобби',
};

export const wishOccasionRuNames: Record<TWishOccasion, string> = {
	birthday: 'День рождения',
	new_year: 'Новый год',
	wedding: 'Свадьба',
	march_8: '8 марта',
	feb_23: '23 февраля',
	graduation: 'Выпускной',
	anniversary: 'Годовщина',
	housewarming: 'Новоселье',
	no_occasion: 'Без повода',
};

export const priorityRuNames: Record<TPriority, string> = {
	high: 'Срочно',
	medium: 'Среднее',
	low: 'Не срочно',
};
