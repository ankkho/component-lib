import React from 'react';
import Head from 'next/head';
import { Alert } from '../components';

const App = () => (
	<>
		<Head>
			<title>Home</title>
			<link rel='icon' href='/favicon.ico' />
		</Head>
		<Alert title='sample' message='asdasda' />
	</>
);

export default App;
