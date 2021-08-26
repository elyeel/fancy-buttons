import { useState } from 'react';

export default function TextRepeaterButton() {
	const [ repetitions, setRepetitions ] = useState(1);
	const handleClick = () => setRepetitions(repetitions + 1);

	const textArray = [];
	for (let i = 0; i < repetitions; i++) {
		textArray.push(<span>I like this text</span>);
	}
	return (
		<button className="TextRepeaterButton" onClick={handleClick}>
			{textArray}
		</button>
	);
}
