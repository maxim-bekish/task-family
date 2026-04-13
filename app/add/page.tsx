import { ScrollArea } from '@/components/ui/scroll-area';
import { BottomNav } from '@/components/layout/bottom-nav';
import { MobileShell } from '@/components/layout/mobile-shell';
import { AddWishHeader } from '@/components/add/add-wish-header';
import { AddWishPlaceholder } from '@/components/add/add-wish-placeholder';
import { appNavItems } from '@/lib/data/nav';

export default function AddWishPage() {
	return (
		<>
			<AddWishHeader />
			<ScrollArea className='flex-1'>
				<AddWishPlaceholder />
			</ScrollArea>
			 
		</>
	);
}
