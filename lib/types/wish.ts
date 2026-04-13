import { IconName } from 'lucide-react/dynamic';

export type TPriority = 'high' | 'medium' | 'low';

export type TWishCategory =
	| 'clothing'
	| 'electronics'
	| 'home'
	| 'books'
	| 'games'
	| 'beauty'
	| 'sports'
	| 'kids'
	| 'auto'
	| 'hobby';

export type TWishOccasion =
	| 'birthday'
	| 'new_year'
	| 'wedding'
	| 'march_8'
	| 'feb_23'
	| 'graduation'
	| 'anniversary'
	| 'housewarming'
	| 'no_occasion';

export interface TMyWish {
	id: string;
	title: string;
	price: number;
	oldPrice?: number;
	image?: string;
	priority: TPriority;
	category: TWishCategory;
	occasions: TWishOccasion[];
}

export interface Friend {
	id: string;
	name: string;
	avatar: string | undefined;
	wishesCount: number;
	lastSeen: string;
	mutualFriends?: number;
}

export interface HomeCurrentUser {
	id: string;
	name: string;
	avatar: string;
}

 

export interface NavItemConfig {
	label: string;
	icon: IconName;
	href: string;
}
