import React, { ChangeEvent } from 'react';
import { useFormContext } from 'react-hook-form';
import { passwordErrorsConfig } from 'shared/Input/config';

type InputProps = {
	type: 'password' | 'email';
	label: 'Password' | 'Email';
};

const initialPasswordErrors = {
	minLength: false,
	lowercase: false,
	uppercase: false,
	number: false,
	specialChar: false,
};

export const Input = ({ type, label }: InputProps) => {
	const [passwordErrors, setPasswordErrors] = React.useState(
		() => initialPasswordErrors
	);

	const {
		register,
		setError,
		formState: { isSubmitSuccessful , errors},
	} = useFormContext();

	React.useEffect(() => {
		if (isSubmitSuccessful) setPasswordErrors(initialPasswordErrors);
	}, [isSubmitSuccessful]);

	console.log({ errors });

	const handleValidate = (value: string) => {
		if (type === 'password') {
			if (!value) {
				setPasswordErrors(initialPasswordErrors);
				return false;
			}

			const minLength = /\S{8,}/g.test(value);
			const lowercase = /[a-z]/g.test(value);
			const uppercase = /[A-Z]/g.test(value);
			const number = /\d/g.test(value);
			const specialChar = /[!#*&$%@';:><]/g.test(value);
			setPasswordErrors({
				minLength,
				lowercase,
				uppercase,
				number,
				specialChar,
			});
			minLength && setError(type, {type: 'maxLength', message: 'maxLength'})
			return Boolean(
				minLength &&
				lowercase &&
				uppercase &&
				number &&
				specialChar
			);
		}
		return /^\S+@\S+\.\S+$/gi.test(value);
	}

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		if (type === 'password' && !event.target.value)
			setPasswordErrors(initialPasswordErrors);
	}

	return (
		<div className="relative flex flex-col">
			<span>{label}</span>
			<input
				type={type}
				autoComplete="off"
				className="border-2 border-black outline-none p-4 mt-2"
				{...register(type, {
					required: true,
					validate: handleValidate,
					onChange: handleChange,
				})}
			/>
			{type === 'password' && (
				<div className="mt-2">
					{passwordErrorsConfig.map((value) => {
						const isValid =
							passwordErrors[value.label as keyof typeof passwordErrors];

						return (
							<div className="flex gap-2 text-success" key={value.label}>
								<span
									className={`min-w-[16px] text-center 
									${isValid ? 'text-[rgb(0,158,45)]' : 'text-[rgb(158,0,0)]'}`}
								>
									{isValid ? '✔' : '✘'}
								</span>
								<span className="text-test">{value.text}</span>
							</div>
						);
					})}
				</div>
			)}
		</div>
	);
};
