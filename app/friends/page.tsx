import { Separator } from '@/components/ui/separator';
import { FriendRequests } from '@/components/friendsN/friend-requests';
import { FriendsMutual } from '@/components/friendsN/friends-mutual';
import { FriendsList } from '@/components/friendsN/friends-list';
import { SearchField } from '@/components/search-field';
import { Header } from '@/components/layout/header';
import Container from '@/components/layout/container';

export default function FriendsPage() {
	return (
		<>
			<Header title='Друзья' />
			<Container>
				<SearchField label='Поиск друзей' placeholder='Введите имя друга' />
				<FriendRequests />
				<FriendsList />
			</Container>
			<Separator className='my-2' />
			<Container>
				<FriendsMutual />
			</Container>
		</>
	);
}
