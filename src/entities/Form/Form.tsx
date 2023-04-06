import React from 'react';
import { FormProvider, useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Input } from 'shared/Input';
import { ErrorsList } from 'shared/ErrorsList';
import { SubmitButton } from 'shared/SubmitButton';
import { FormValues } from './types';

const userSchema = yup.object().shape({
	email: yup.string().required().email(),
	password: yup
		.string()
		.required()
		.matches(/[!#*&$%@';:><]/g, { name: 'specialChar' })
		.matches(/\d/g, { name: 'number' })
		.matches(/[A-ZА-Я]/g, { name: 'uppercase' })
		.matches(/[a-zа-я]/g, { name: 'lowercase' })
		.matches(/\S{8,}/g, { name: 'minLength' }),
});

export const Form = () => {
	const methods = useForm({
		mode: 'onChange',
		defaultValues: {
			email: '',
			password: '',
		},
		resolver: yupResolver(userSchema),
		criteriaMode: 'all',
	});

	const onSubmit: SubmitHandler<FormValues> = (formValues) => {
		alert(JSON.stringify(formValues));
		methods.reset();
	};

	return (
		<div className="border-2 border-black px-4 py-8 w-[288px] md:w-[600px]">
			<FormProvider {...methods}>
				<form onSubmit={methods.handleSubmit(onSubmit)}>
					<div className="grid gap-4 md:grid-cols-2">
						<Input label="Email" type="email" />
						<div>
							<Input label="Password" type="password" />
							<ErrorsList type="password" />
						</div>
					</div>
					<SubmitButton disabled={!methods.formState.isValid} />
				</form>
			</FormProvider>
		</div>
	);
};
