import type { NavItemConfig } from '@/lib/types/wish';

export const appNavItems: NavItemConfig[] = [
	{ label: 'Главная', icon: 'home', href: '/' },
	{ label: 'Друзья', icon: 'users', href: '/friends' },
	{ label: 'Желания', icon: 'heart', href: '/wishes' },
	{ label: 'Профиль', icon: 'user', href: '/profile' },
];
