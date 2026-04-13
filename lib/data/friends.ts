import type { Friend } from '@/lib/types/wish';

export const friendsList: Friend[] = [
	{ id: '1', name: 'Анна', avatar: undefined, wishesCount: 12, lastSeen: 'была сегодня' },
	{
		id: '2',
		name: 'Дима',
		avatar: 'https://github.com/shadcn.png',
		wishesCount: 12,
		lastSeen: 'была сегодня',
	},
	{
		id: '3',
		name: 'Елена',
		avatar: 'https://github.com/shadcn.png',
		wishesCount: 12,
		lastSeen: 'была вчера',
	},
	{
		id: '4',
		name: 'Игорь4',
		avatar: 'https://github.com/shadcn.png',
		wishesCount: 12,
		lastSeen: 'была сегодня',
	},
];

export const friendsPageRequests: Friend[] = [
	{
		id: '5',
		name: 'Ольга Петрова',
		avatar: undefined,
		wishesCount: 12,
		lastSeen: 'была сегодня',
	},
	{
		id: '6',
		name: 'Мария Иванова',
		avatar: 'https://github.com/shadcn.png',
		wishesCount: 12,
		lastSeen: 'была сегодня',
	},
	{
		id: '7',
		name: 'Елена Петрова',
		avatar: undefined,
		wishesCount: 12,
		lastSeen: 'была сегодня',
	},
];
export const mutualFriends: Friend[] = [
	{
		id: '5',
		name: 'Ольга Смирнова',
		avatar: undefined,
		mutualFriends: 3,
		wishesCount: 12,
		lastSeen: 'была сегодня',
	},
];
