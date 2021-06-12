import "../stylesheets/leftNav.css";

// import React, { useState } from "react";


const LeftNavButton = (props) => {
	// const [active, setActive] = useState(navPages[0]);

	const flexSeperator = <div className="flexSeperator" />;

	return (
		<>
			{props.page === "Account" ? flexSeperator : null}

			<button
				className="leftNavButton"
				onClick={() => {
					console.log(`clicked ${props.page}`);
				}}
			>
				<img
					className="leftNavIcon"
					src={require(`static/js/images/${props.page}.svg`).default}
					// src={require(`../images/${props.page}.svg`).default}
					alt={props.page}
				/>
			</button>
		</>
	);
};

export default LeftNavButton;
