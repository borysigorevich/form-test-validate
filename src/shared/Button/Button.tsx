import React from 'react';

type ButtonProps = {
	isValid?: boolean;
};

export const Button = ({ isValid = true }: ButtonProps) => {
	return (
		<button
			className={`h-[52px] flex items-center justify-center max-w-[276px]
				w-full  mt-8 ml-auto text-white
				${isValid ? 'bg-black' : 'bg-gray-300'}`}
			type="submit"
			disabled={!isValid}
		>
			Submit
		</button>
	);
};
