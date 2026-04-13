import { MobileStackHeader } from '@/components/layout/header';

interface AddWishHeaderProps {
	title?: string;
	backHref?: string;
}

export function AddWishHeader({ title = 'Новое желание', backHref = '/' }: AddWishHeaderProps) {
	return <MobileStackHeader backHref={backHref} title={title} />;
}
