import React, { useState } from 'react';

const Accordion = ({ items }) => {
	const [activeIndex, setActiveIndex] = useState(0);

	const onTitleClick = (index) => {
		setActiveIndex(index);
	};

	const renItems = items.map((item, index) => {
		const active = index === activeIndex ? ' active' : '';

		return (
			<React.Fragment key={index}>
				<div className={`title${active}`} onClick={() => onTitleClick(index)}>
					<i className="dropdown icon"></i>
					{item.title}
				</div>
				<div className={`content${active}`}>
					<p>{item.content}</p>
				</div>
			</React.Fragment>
		);
	});

	return (
		<div className="ui styled accordion">
			{renItems}
		</div>
	);
};

export default Accordion;
