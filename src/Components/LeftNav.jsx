import "../stylesheets/leftNav.css";

// import React, { useState } from "react";

const LeftNav = () => {
	const navPages = [
		"Files",
		"Search",
		"SourceControl",
		"Debug",
		"RemoteExplorer",
		"Extensions",
		"Account",
		"Settings",
	];

	// const [active, setActive] = useState(navPages[0]);

	return (
		<div className="leftNav">
			{navPages.map((page) => (
				<button className="leftNavButton" onClick={console.log(`${page}`)}>
					<img
						className="leftNavIcon"
						src={require(`../images/vscode-default-icons/${page}.svg`).default}
						alt={page}
					/>
				</button>
			))}
		</div>
	);
};

export default LeftNav;
