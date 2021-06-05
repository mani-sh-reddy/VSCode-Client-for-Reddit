import "../stylesheets/leftNav.css";
import Files from "../images/vscode-default-icons/files.svg";
import Search from "../images/vscode-default-icons/search.svg";
import SourceControl from "../images/vscode-default-icons/source-control.svg";
import Debug from "../images/vscode-default-icons/debug-alt.svg";
import RemoteExplorer from "../images/vscode-default-icons/remote-explorer.svg";
import Extensions from "../images/vscode-default-icons/extensions.svg";
import Account from "../images/vscode-default-icons/account.svg";
import Settings from "../images/vscode-default-icons/settings-gear.svg";

// import React, { useState } from "react";

const LeftNav = () => {
	// const navPages = [
	// 	"Files",
	// 	"Search",
	// 	"SourceControl",
	// 	"Debug",
	// 	"RemoteExplorer",
	// 	"Extensions",
	// 	"Account",
	// 	"Settings",
	// ];

	// const [active, setActive] = useState(navPages[0]);

	return (
		<div className="leftNav">
			{/* {navPages.map((page) => (
				<button className="leftNavButton" onClick={console.log(`${page}`)}>
					<img className="leftNavIcon" src={require(`../images/vscode-default-icons/${page}.svg`)} alt={page} />
				</button>
			))} */}

			<button className="leftNavButton" onClick={console.log("Clicked Files Icon!")}>
				<img className="leftNavIcon" src={Files} alt="Files Icon" />
			</button>

			<button className="leftNavButton" onClick={console.log("Clicked Search Icon!")}>
				<img className="leftNavIcon" src={Search} alt="SearchIcon" />
			</button>

			<button className="leftNavButton" onClick={console.log("Clicked Source Icon!Control")}>
				<img className="leftNavIcon" src={SourceControl} alt="SourceControl Icon" />
			</button>

			<button className="leftNavButton" onClick={console.log("Clicked DebugA Icon!lt")}>
				<img className="leftNavIcon" src={Debug} alt="DebugAlt Icon" />
			</button>

			<button className="leftNavButton" onClick={console.log("Clicked Remote Icon!Explorer")}>
				<img className="leftNavIcon" src={RemoteExplorer} alt="RemoteExplorer Icon" />
			</button>

			<button className="leftNavButton" onClick={console.log("Clicked Extens Icon!ions")}>
				<img className="leftNavIcon" src={Extensions} alt="Extensions Icon" />
			</button>

			<div className="flexSeperator" />

			<button className="leftNavButton" onClick={console.log("Clicked Accoun Icon!t")}>
				<img className="leftNavIcon" src={Account} alt="Account Icon" />
			</button>

			<button className="leftNavButton" onClick={console.log("Clicked Settin Icon!gs")}>
				<img className="leftNavIcon" src={Settings} alt="Settings Icon" />
			</button>
		</div>
	);
};

export default LeftNav;
