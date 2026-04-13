import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export function AddWishPlaceholder() {
	return (
		<div className='p-5 flex flex-col gap-4'>
			<p className='text-sm text-muted-foreground'>
				Заполните поля ниже или вставьте ссылку на товар — форма пока заглушка для макета.
			</p>
			<div className='flex flex-col gap-2'>
				<span className='text-sm font-medium'>Название</span>
				<Input id='add-title' placeholder='Например, кружка ручной работы' />
			</div>
			<div className='flex flex-col gap-2'>
				<span className='text-sm font-medium'>Ссылка</span>
				<Input id='add-link' type='url' placeholder='https://...' />
			</div>
			<div className='flex flex-col gap-2'>
				<span className='text-sm font-medium'>Комментарий</span>
				<Textarea id='add-note' placeholder='Размер, цвет, пожелания...' rows={4} />
			</div>
		</div>
	);
}
