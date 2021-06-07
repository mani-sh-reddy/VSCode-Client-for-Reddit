import "../stylesheets/leftNav.css";
import LeftNavButton from "./LeftNavButton";

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
				<LeftNavButton page={page} key={page}/>
			))}
		</div>
	);
};

export default LeftNav;
