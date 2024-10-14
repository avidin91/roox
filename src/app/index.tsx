import React from 'react';
import { Outlet } from 'react-router-dom';
import './styles.css';
import {HeaderComponent} from '@widgets/header-component';
import { FooterComponent } from '@widgets/footer-component';

const App = () => {
	return (
		<>
			<HeaderComponent />
			<div
				className={'layout'}
			>
				<Outlet />
			</div>
			<FooterComponent />
		</>
	);
};

export default App;
