export interface FriendProfileData {
	id: string;
	name: string;
	firstName: string;
	initials: string;
	stats: {
		wishes: number;
		friends: number;
	};
}

export interface FriendWishCategory {
	id: string;
	label: string;
}

export interface FriendWishEntry {
	id: string;
	title: string;
	price: number;
	image: string | null;
	bgColor: string;
	isGift: boolean;
	isReserved: boolean;
	addedAt: string;
}
