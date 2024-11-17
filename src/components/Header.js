import React from 'react';
import Link from './Link';

const Header = () => {
	return (
		<div className="ui secondary pointing menu">
			<Link className="item" path="/" name="Accordion" />
			<Link className="item" path="/list" name="List" />
			<Link className="item" path="/dropdown" name="Dropdown" />
			<Link className="item" path="/translate" name="Translate" />
		</div>
	);
};

export default Header;
