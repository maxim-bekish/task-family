import { MobileStackHeader } from '@/components/layout/header';

interface ProfileHeaderProps {
	title?: string;
	backHref?: string;
}

export function ProfileHeader({ title = 'Профиль', backHref = '/' }: ProfileHeaderProps) {
	return <MobileStackHeader backHref={backHref} title={title} />;
}
