import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import CoreLayout from 'components/coreLayout'
import routes from './routes'

export default () => (
	<BrowserRouter>
		<div className='route-container'>
			<CoreLayout routes={routes} />
		</div>
	</BrowserRouter>
)