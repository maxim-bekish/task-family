import { ScrollArea } from '@/components/ui/scroll-area';
import { BottomNav } from '@/components/layout/bottom-nav';
import { MobileShell } from '@/components/layout/mobile-shell';
import { ProfileHeader } from '@/components/profile/profile-header';
import { ProfilePageContent } from '@/components/profile/profile-page-content';
import { appNavItems } from '@/lib/data/nav';

export default function ProfilePage() {
	return (
		<>
			<ScrollArea className='flex-1'>
				<ProfilePageContent />
			</ScrollArea>
		</>
	);
}
