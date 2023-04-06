export interface ErrorsListProps {
	type: 'password' | 'email';
}

export interface initialPasswordErrors {
	minLength: string;
	lowercase: string;
	uppercase: string;
	number: string;
	specialChar: string;
}
