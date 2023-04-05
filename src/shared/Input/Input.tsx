import React from 'react';
import { useFormContext } from 'react-hook-form';
import { passwordErrorsConfig } from 'shared/Input/config';

type InputProps = {
	type: 'password' | 'email';
	label: 'Password' | 'Email';
};

interface initialPasswordErrors {
	minLength: string;
	lowercase: string;
	uppercase: string;
	number: string;
	specialChar: string;
}

export const Input = ({ type, label }: InputProps) => {
	const {
		register,
		formState: { errors, dirtyFields },
	} = useFormContext();

	return (
		<div className="relative flex flex-col">
			<span>{label}</span>
			<input
				type={type}
				autoComplete="off"
				className="border-2 border-black outline-none p-4 mt-2"
				{...register(type)}
			/>
			{type === 'password' && (
				<div className="mt-2">
					{passwordErrorsConfig.map((value) => {
						const isError = (
							errors.password?.types as unknown as initialPasswordErrors
						)?.[value.label];

						return (
							<div className="flex gap-2 text-success" key={value.label}>
								<span
									className={`min-w-[16px] text-center 
									${!isError && dirtyFields['password'] ? 'text-[rgb(0,158,45)]' : 'text-[rgb(158,0,0)]'}`}
								>
									{!isError && dirtyFields['password'] ? '✔' : '✘'}
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
