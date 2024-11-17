import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

const options = [
	{
		label: 'Afrikaans',
		value: 'af'
	},
	{
		label: 'Arabic',
		value: 'ar'
	},
	{
		label: 'Hindi',
		value: 'hi'
	},
];

const Translate = () => {
	const [selected, setSelected] = useState(options[0]);
	const [text, setText] = useState('');

	return (
		<div className="ui styled">
			<div className="ui form">
				<div className="field">
					<label>Enter Text:</label>
					<input type="text" value={text} onChange={(e) => setText(e.target.value)} />
				</div>
			</div>
			<br />
			<Dropdown label="Select a Language" options={options} selected={selected} onSelected={setSelected} />
			<Convert text={text} lang={selected} />
		</div>
	);
};

export default Translate;
