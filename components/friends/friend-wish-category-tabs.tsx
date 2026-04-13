import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import type { FriendWishCategory } from '@/lib/types/friend-detail';

interface FriendWishCategoryTabsProps {
	categories: FriendWishCategory[];
	defaultValue?: string;
}

export function FriendWishCategoryTabs({
	categories,
	defaultValue = 'all',
}: FriendWishCategoryTabsProps) {
	return (
		<div className='px-5 py-2'>
			<Tabs defaultValue={defaultValue} className='w-full'>
				<TabsList className='w-full justify-start gap-1 bg-transparent p-0 flex-wrap h-auto'>
					{categories.map((cat) => (
						<TabsTrigger
							key={cat.id}
							value={cat.id}
							className='data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-full px-4'>
							{cat.label}
						</TabsTrigger>
					))}
				</TabsList>
			</Tabs>
		</div>
	);
}
