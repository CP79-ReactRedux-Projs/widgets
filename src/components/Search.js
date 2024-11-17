import React, { useState, useEffect } from 'react';
import WikiPedia from '../api/WikiPedia';

const Search = () => {
	const [term, setTerm] = useState('');
	const [results, setResults] = useState([]);

	useEffect(() => {
		let timer = null;

		if (term !== '')
		{
			timer = setTimeout(async () => {
				const res = await WikiPedia.get('', { params: { srsearch: term } });
				setResults(res.data.query.search);
			}, 800);
		}
		else
		{
			setResults([]);
		}

		return () => {
			clearTimeout(timer);
		};
	}, [term]);

	const renderedResults = results.map((result) => {
		return (
			<div className="item" key={result.pageid}>
				<div className="right floated content">
					<a className="ui button" target="_blank" rel="noreferrer" href={`https://en.wikipedia.org?curid=${result.pageid}`}>Check it !</a>
				</div>
				<div className="content">
					<div className="header">{result.title}</div>
					<p dangerouslySetInnerHTML={{ __html: result.snippet }}></p>
				</div>
			</div>
		);
	});

	return (
		<div className="ui styled">
			<div className="ui form">
				<div className="field">
					<label>Search:</label>
					<input type="search" onChange={(e) => setTerm(e.target.value)} value={term} />
				</div>
			</div>
			<div className="ui celled list">{renderedResults}</div>
		</div>
	);
};

export default Search;
