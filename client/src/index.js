import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.scss';
import Service from './webtix-code/Utils/Routing/Service';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Service />
	</React.StrictMode>
);
