type LabelType = 'minLength' | 'lowercase' | 'uppercase' | 'number' | 'specialChar';

export const passwordErrorsConfig: {
	label: LabelType;
	text: string;
}[] = [
	{
		label: 'minLength',
		text: '8+ characters',
	},
	{
		label: 'lowercase',
		text: 'lowercase letter',
	},
	{
		label: 'uppercase',
		text: 'uppercase letter',
	},
	{
		label: 'number',
		text: 'number',
	},
	{
		label: 'specialChar',
		text: 'special character',
	},
];
