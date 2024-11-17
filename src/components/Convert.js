import React, { useState, useEffect } from 'react';
import GoogleTranslate from '../api/GoogleTranslate';

const Convert = ({ text, lang }) => {
	const [translated, setTranslated] = useState('');

	useEffect(() => {
		let timer = null;

		if (text !== '')
		{
			timer = setTimeout(async () => {
				const res = await GoogleTranslate.post('', {}, { params: { target: lang.value, q: text }});
				setTranslated(res.data.data.translations[0].translatedText);
			}, 800);
		}
		else
		{
			setTranslated('');
		}

		return () => {
			clearTimeout(timer);
		};
	}, [text, lang]);

	return (
		<div className="ui styled">
			<hr />
			<h3 className="ui header">Output :</h3>
			<div className="context">{translated}</div>
		</div>
	);
};

export default Convert;
