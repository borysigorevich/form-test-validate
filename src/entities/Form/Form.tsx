import React from 'react';
import { FormProvider, useForm, SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';
import { Input } from 'shared/Input';
import { Button } from 'shared/Button';
import { yupResolver } from '@hookform/resolvers/yup';

type FormValues = {
	password: string;
	email: string;
};

const userSchema = yup.object().shape({
	email: yup
		.string()
		.required()
		.matches(/^\S+@\S+\.\S+$/gi),
	password: yup
		.string()
		.required()
		.matches(/[!#*&$%@';:><]/g, { name: 'specialChar' })
		.matches(/\d/g, { name: 'number' })
		.matches(/[A-Z]/g, { name: 'uppercase' })
		.matches(/[a-z]/g, { name: 'lowercase' })
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

						<Input label="Password" type="password" />
					</div>
					<Button isValid={methods.formState.isValid} />
				</form>
			</FormProvider>
		</div>
	);
};
