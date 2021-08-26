import { useState } from 'react';

export default function AngryButton() {
	const [ anger, setAnger ] = useState(0);

	const handleClick = () => {
		anger > 1 ? setAnger(0) : setAnger(anger + 0.1);
	};

	return (
		<button
			className="AngryButton"
			style={{ backgroundColor: `rgba(255,0,0,${anger})` }}
			onClick={handleClick}
		>
			{anger < 1 && <span>Don't click me too much! </span>}
			{anger > 1 && <span>Rawr!</span>}
		</button>
	);
}
