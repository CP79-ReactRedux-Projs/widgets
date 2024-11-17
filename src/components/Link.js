import React from 'react';

const Link = ({ path, name}) => {
	const onClick = (e) => {
		if (e.metaKey || e.ctrlKey) return null;
		e.preventDefault();
		window.history.pushState({}, '', path);
		window.dispatchEvent(new PopStateEvent('popstate'));
	};

	return (
		<a className="item" href={path} onClick={onClick}>{name}</a>
	);
};

export default Link;
