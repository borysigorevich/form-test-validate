import React from 'react';
import { ButtonProps } from './types';

export const SubmitButton: React.FC<ButtonProps> = ({ disabled = false }) => {
	return (
		<button
			className={`h-[52px] flex items-center justify-center max-w-[276px]
				w-full  mt-8 ml-auto text-white
				${disabled ? 'bg-gray-300' : 'bg-black'}`}
			type="submit"
			disabled={disabled}
		>
			Submit
		</button>
	);
};
