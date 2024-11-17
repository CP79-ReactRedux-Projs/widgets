import React, { useState } from 'react';
import Accordion from './Accordion';
import Search from './Search';
import Dropdown from './Dropdown';
import Translate from './Translate';
import Route from './Route';
import Header from './Header';

const items = [
	{
		title: 'Question 0 ?',
		content: 'Answer 0 .'
	},
	{
		title: 'Question 1 ?',
		content: 'Answer 1 .'
	},
	{
		title: 'Question 2 ?',
		content: 'Answer 2 .'
	}
];

const options = [
	{
		label: 'The Color Red',
		value: 'red'
	},
	{
		label: 'The Color Blue',
		value: 'blue'
	},
	{
		label: 'The Color Green',
		value: 'green'
	}
];

const App = () => {
	const [selected, setSelected] = useState(options[0]);

	return (
		<div className="app ui container">
			<Header />
			<Route path="/"><Accordion items={items} /></Route>
			<Route path="/list"><Search /></Route>
			<Route path="/dropdown">
				<Dropdown label="Select a Color" options={options} selected={selected} onSelected={setSelected} />
				<hr />
				<div className="ui form">
					<div className="field">
						<label className="label" style={{color: selected.value}}>The selected color is {selected.value}.</label>
					</div>
				</div>
			</Route>
			<Route path="/translate"><Translate /></Route>
		</div>
	);
};

export default App;
