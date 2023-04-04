import React from 'react';
import { FormProvider, useForm, SubmitHandler } from 'react-hook-form';
import { Input } from 'shared/Input';
import { Button } from 'shared/Button';

type FormValues = {
	password: string;
	email: string;
};

export const Form = () => {
	const methods = useForm({
		mode: 'onChange',
		defaultValues: {
			email: '',
			password: '',
		},
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
