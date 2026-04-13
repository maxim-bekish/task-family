import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import type { FriendProfileData } from '@/lib/types/friend-detail';

interface FriendProfileSummaryProps {
	profile: FriendProfileData;
}

export function FriendProfileSummary({ profile }: FriendProfileSummaryProps) {
	return (
		<div className='flex items-center gap-5 p-5 border-b border-border'>
			<Avatar className={`w-16 h-16 bg-gradient-to-br ${profile.bgGradient}`}>
				<AvatarFallback className='text-white text-2xl'>{profile.initials}</AvatarFallback>
			</Avatar>
			<div className='flex-1 min-w-0'>
				<p className='text-xl font-bold mb-2 truncate'>{profile.firstName}</p>
				<div className='flex gap-6'>
					<div>
						<span className='font-bold'>{profile.stats.wishes}</span>
						<span className='text-muted-foreground text-sm ml-1'>желаний</span>
					</div>
					<div>
						<span className='font-bold'>{profile.stats.friends}</span>
						<span className='text-muted-foreground text-sm ml-1'>друга</span>
					</div>
				</div>
			</div>
		</div>
	);
}
