export interface FriendRequestItem {
	id: string;
	name: string;
	avatar: string | null;
	initials: string;
	bgGradient: string;
	isOnline: boolean;
	message: string;
}

export interface FriendsListEntry {
	id: string;
	name: string;
	avatar: string | null;
	initials: string;
	isOnline: boolean;
	wishesCount: number;
	lastSeen: string;
}

export interface FriendSuggestionEntry {
	id: string;
	name: string;
	initials: string;
	bgColor: string;
	mutualFriends: number;
}
