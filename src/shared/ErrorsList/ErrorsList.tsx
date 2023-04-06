import React from 'react';
import { useFormContext } from 'react-hook-form';
import { initialPasswordErrors, ErrorsListProps } from './types';
import { ErrorsListConfig } from './config';

export const ErrorsList: React.FC<ErrorsListProps> = ({ type }) => {
	const {
		formState: { errors, dirtyFields },
	} = useFormContext();

	return (
		<div className="mt-2">
			{ErrorsListConfig[type].map((value) => {
				const isError = (
					errors.password?.types as unknown as initialPasswordErrors
				)?.[value.label];

				return (
					<div className="flex gap-2 text-success" key={value.label}>
						<span
							className={`min-w-[16px] text-center 
									${!isError && dirtyFields[type] ? 'text-[rgb(0,158,45)]' : 'text-[rgb(158,0,0)]'}`}
						>
							{!isError && dirtyFields[type] ? '✔' : '✘'}
						</span>
						<span className="text-test">{value.text}</span>
					</div>
				);
			})}
		</div>
	);
};
