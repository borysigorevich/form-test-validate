import React from 'react';
import { Header } from 'shared/Header';
import { Form } from 'entities/Form';

export const Home = () => {
	return <>
		<Header />
		<main className='grid justify-center items-start md:justify-center
			 				md:items-center pt-4 md:pt-0'>
			<Form />
		</main>
	</>;
};
