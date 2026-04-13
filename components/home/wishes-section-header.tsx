import { MobileStackHeader } from '@/components/layout/header';
import { Button } from '@/components/ui/button';
import { ArrowDownUp, Gift } from 'lucide-react';

interface WishesSectionHeaderProps {
	title: string;
	filterLabel?: string;
	onFilterClick?: () => void;
}

export function WishesSectionHeader({
	title,
	filterLabel = 'Фильтр',
	onFilterClick,
}: WishesSectionHeaderProps) {
	return (
		<MobileStackHeader
			titleAs='h2'
			title={title}
			className='border-0 py-3 mb-3'
			left={
				<div
					className='flex h-9 w-9 items-center justify-center text-muted-foreground'
					aria-hidden>
					<Gift className='w-5 h-5' />
				</div>
			}
			right={
				<Button
					variant='ghost'
					size='icon'
					className='w-9 h-9'
					type='button'
					onClick={onFilterClick}
					aria-label={filterLabel}>
					<ArrowDownUp className='w-5 h-5' />
				</Button>
			}
		/>
	);
}
