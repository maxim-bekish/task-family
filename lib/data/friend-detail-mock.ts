import type { FriendProfileData, FriendWishCategory, FriendWishEntry } from '@/lib/types/friend-detail';

export const friendDetailProfile: FriendProfileData = {
	id: '1',
	name: 'Анна Ковалёва',
	firstName: 'Анна',
	initials: 'А',
	stats: {
		wishes: 12,
		friends: 4,
	},
};

export const friendDetailCategories: FriendWishCategory[] = [
	{ id: 'all', label: 'Все' },
	{ id: 'gifts', label: '🎁 Идеи подарков' },
	{ id: 'clothes', label: '👗 Одежда' },
	{ id: 'books', label: '📚 Книги' },
];

export const friendDetailWishes: FriendWishEntry[] = [
	{
		id: '1',
		title: 'Керамическая кружка ручной работы',
		price: 1890,
		image: null,
		bgColor: 'bg-[#E2D1C3]',
		isGift: true,
		isReserved: false,
		addedAt: '2 дня назад',
	},
	{
		id: '2',
		title: 'Ежедневник в кожаном переплёте',
		price: 3450,
		image: null,
		bgColor: 'bg-[#CBD5E1]',
		isGift: false,
		isReserved: true,
		addedAt: '5 дней назад',
	},
	{
		id: '3',
		title: 'Шерстяной плед крупной вязки',
		price: 5990,
		image: null,
		bgColor: 'bg-[#D4C4B7]',
		isGift: false,
		isReserved: false,
		addedAt: 'неделю назад',
	},
	{
		id: '4',
		title: 'Книга «Дизайн привычных вещей»',
		price: 1250,
		image: null,
		bgColor: 'bg-[#A5B4CB]',
		isGift: false,
		isReserved: false,
		addedAt: '2 недели назад',
	},
];

export function getFriendDetailMock(id: string): {
	profile: FriendProfileData;
	categories: FriendWishCategory[];
	wishes: FriendWishEntry[];
} {
	return {
		profile: { ...friendDetailProfile, id },
		categories: friendDetailCategories,
		wishes: friendDetailWishes,
	};
}
