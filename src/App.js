import React, { Fragment, useEffect } from 'react';

import ZoneCard from './components/ZoneCard';

import classes from './App.module.css';

const App = (props) => {
	console.log(localStorage.getItem('secondsLeft'));
	return (
		<Fragment>
			<ZoneCard title='Reekwater' onCooldown={false} />
		</Fragment>
	);
};

export default App;
