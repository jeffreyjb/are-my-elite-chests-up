import { useState } from 'react';

import LootButton from './LootButton';
import CountdownBlock from './CountdownBlock';
import { useEffect } from 'react/cjs/react.development';

const ZoneCard = (props) => {
	const [ onCooldown, setOnCooldown ] = useState(false);
	const [ timer, setTimer ] = useState(undefined);

	const setCooldown = () => {
		setOnCooldown(true);
		localStorage.setItem('hoursLeft', '0');
		localStorage.setItem('minutesLeft', '0');
		localStorage.setItem('secondsLeft', '30');

		const timerHandle = setInterval(() => {
			let hl = parseInt(localStorage.getItem('hoursLeft'));
			let ml = parseInt(localStorage.getItem('minutesLeft'));
			let sl = parseInt(localStorage.getItem('secondsLeft'));

			if (sl !== 0) {
				console.log('here');
				sl--;
				localStorage.setItem('secondsLeft', sl);
			} else {
				setOnCooldown(false);
			}

			console.log(localStorage.getItem('secondsLeft'));
		}, 1000);

		setTimer(timerHandle);
	};

	let buttonOrCountdown = <LootButton onClick={setCooldown} />;
	if (onCooldown === true) {
		buttonOrCountdown = <CountdownBlock />;
	}

	useEffect(
		() => {
			if (!onCooldown) {
				clearInterval(timer);
				setTimer(undefined);
			}
		},
		[ onCooldown ]
	);

	return (
		<div>
			{props.title} {buttonOrCountdown}
		</div>
	);
};

export default ZoneCard;
