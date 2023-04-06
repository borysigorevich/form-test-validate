import React from 'react';
import { useFormContext } from 'react-hook-form';
import { InputProps } from './types';

export const Input: React.FC<InputProps> = ({ type, label }) => {
	const { register } = useFormContext();

	return (
		<div className="relative flex flex-col">
			<span>{label}</span>
			<input
				type={type}
				autoComplete="off"
				className="border-2 border-black outline-none p-4 mt-2 h-[52px]"
				{...register(type)}
			/>
		</div>
	);
};
