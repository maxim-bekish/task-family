'use client';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export function BackButton() {
	const router = useRouter();

	return (
		<Button onClick={() => router.back()} variant='ghost' size='icon-lg'>
			<ArrowLeft />
		</Button>
	);
}
