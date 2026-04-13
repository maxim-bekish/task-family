import { FriendDetailActions } from '@/components/friends/friend-detail-actions';
import { FriendProfileSummary } from '@/components/friends/friend-profile-summary';
import { FriendWishCategoryTabs } from '@/components/friends/friend-wish-category-tabs';
import { FriendWishesSection } from '@/components/friends/friend-wishes-section';
import { getFriendDetailMock } from '@/lib/data/friend-detail-mock';

export default function FriendDetailPage({ params }: { params: { id: string } }) {
	const { profile, categories, wishes } = getFriendDetailMock(params.id);

	return (
		// <ScrollArea className='flex-1'>
		<>
			<FriendProfileSummary profile={profile} />
			<FriendDetailActions />
			<FriendWishCategoryTabs categories={categories} />
			<FriendWishesSection firstName={profile.firstName} wishes={wishes} />
		</>
		// </ScrollArea>
	);
}
