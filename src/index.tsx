import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './app';
import NotFound from '@pages/not-found';
import { ErrorBoundary } from '@shared/routing';
import { UserList } from '@pages/user-list';
import './style.css';
import { Main } from '@pages/main';
import { store } from '@shared/store';
import { Provider } from 'react-redux';
import { Profile } from '@pages/profile';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <ErrorBoundary />,
		children: [
			{
				path: '/',
				element: <Main />,
			},
			{
				path: 'user-list',
				element: <UserList />,
			},
			{
				path: 'profile/:id',
				element: <Profile />,
			},
			{
				path: '*',
				element: <NotFound />,
			},
		],
	},
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>,
);
