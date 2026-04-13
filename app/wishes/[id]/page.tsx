import { ScrollArea } from '@/components/ui/scroll-area';
import { BottomNav } from '@/components/layout/bottom-nav';
import { MobileShell } from '@/components/layout/mobile-shell';
import { WishDetailContent } from '@/components/wishes/wish-detail-content';
import { WishDetailHeader } from '@/components/wishes/wish-detail-header';
import { getWishDetailMock } from '@/lib/data/wish-detail-mock';
import { appNavItems } from '@/lib/data/nav';

export default function WishDetailPage({ params }: { params: { id: string } }) {
	const wish = getWishDetailMock(params.id);

	return (
		<>
			<ScrollArea className='flex-1'>
				<WishDetailContent wish={wish} />
			</ScrollArea>
		</>
	);
}
