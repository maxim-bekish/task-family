import { Button } from '@/components/ui/button';
import { ButtonGroup } from '@/components/ui/button-group';
import { Field, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';

interface FriendsSearchFieldProps {
	placeholder: string;
	label?: string;
}

export function SearchField({ label, placeholder }: FriendsSearchFieldProps) {
	return (
		<Field className='py-3'>
			{label && <FieldLabel htmlFor='input-button-group'>{label}</FieldLabel>}

			<ButtonGroup className='w-full'>
				<Input className='bg-secondary' id='input-button-group' placeholder={placeholder} />
				<Button variant='outline'>Поиск</Button>
			</ButtonGroup>
		</Field>
	);
}
