'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { appNavItems } from '@/lib/data/nav';

import { DynamicIcon } from 'lucide-react/dynamic';
import Container from './container';
function isNavActive(pathname: string, href: string): boolean {
	if (href === '/') return pathname === '/';
	return pathname === href || pathname.startsWith(`${href}/`);
}

export function BottomNav() {
	const pathname = usePathname();

	return (
		<div className={cn('fixed bottom-0 left-0 right-0 ')}>
			<Container>
				<nav className='flex justify-between items-center py-3   border-t border-border'>
					{appNavItems.map((item) => {
						const active = isNavActive(pathname, item.href);
						return (
							<Link
								key={item.href}
								href={item.href}
								className={cn(
									'flex flex-col items-center gap-1 text-xs font-medium',
									active ? 'text-primary' : 'text-muted-foreground',
								)}>
								<DynamicIcon name={item.icon} />
								<span>{item.label}</span>
							</Link>
						);
					})}
				</nav>
			</Container>
		</div>
	);
}
