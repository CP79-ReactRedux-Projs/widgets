import { useState, useEffect } from 'react';

const Route = ({path, children}) => {
	const [currentPath, setCurrentPath] = useState(window.location.pathname.toLowerCase());

	useEffect(() => {
		const changeLoc = () => {
			setCurrentPath(window.location.pathname.toLowerCase());
		};

		window.addEventListener('popstate', changeLoc, { capture: true });

		return () => {
			window.removeEventListener('popstate', changeLoc, { capture: true });
		};
	}, []);

	return (currentPath === path ? children : null);
};

export default Route;
