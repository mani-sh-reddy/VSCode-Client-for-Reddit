import "../stylesheets/leftNav.css";
// import Files from "../images/vscode-default-icons/files.svg";
// import Search from "../images/vscode-default-icons/search.svg";
// import SourceControl from "../images/vscode-default-icons/source-control.svg";
// import Debug from "../images/vscode-default-icons/debug-alt.svg";
// import RemoteExplorer from "../images/vscode-default-icons/remote-explorer.svg";
// import Extensions from "../images/vscode-default-icons/extensions.svg";
// import Account from "../images/vscode-default-icons/account.svg";
// import Settings from "../images/vscode-default-icons/settings-gear.svg";

import React, { useState } from "react";

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

	const [active, setActive] = useState(navPages[0]);

	return (
		<div className="leftNav">
			{navPages.map((page) => (
				<button className="leftNavButton" onClick={console.log(`${page}`)}>
					<img className="leftNavIcon" src={require(`../images/vscode-default-icons/${page}.svg`)} alt={page} />
				</button>
			))}

			{/* <button className="leftNavButton" onClick={console.log("Files")}>
				<img className="leftNavIcon" src={Files} alt="Files" />
			</button> */}

			{/* <button className="leftNavButton" onClick={console.log("NavFiles")}>
				<img className="leftNavIcon" src={NavFilesIcon} alt="NavFilesIcon" />
			</button>

			<button className="leftNavButton" onClick={console.log("NavSearch")}>
				<img className="leftNavIcon" src={NavSearchIcon} alt="NavSearchIcon" />
			</button>

			<button className="leftNavButton" onClick={console.log("NavSourceControl")}>
				<img className="leftNavIcon" src={NavSourceControlIcon} alt="NavSourceControlIcon" />
			</button>

			<button className="leftNavButton" onClick={console.log("NavDebugAlt")}>
				<img className="leftNavIcon" src={NavDebugAltIcon} alt="NavDebugAltIcon" />
			</button>

			<button className="leftNavButton" onClick={console.log("NavRemoteExplorer")}>
				<img className="leftNavIcon" src={NavRemoteExplorerIcon} alt="NavRemoteExplorerIcon" />
			</button>

			<button className="leftNavButton" onClick={console.log("NavExtensions")}>
				<img className="leftNavIcon" src={NavExtensionsIcon} alt="NavExtensionsIcon" />
			</button>

			<div className="flexSeperator" />

			<button className="leftNavButton" onClick={console.log("NavAccount")}>
				<img className="leftNavIcon" src={NavAccountIcon} alt="NavAccountIcon" />
			</button>

			<button className="leftNavButton" onClick={console.log("NavSettings")}>
				<img className="leftNavIcon" src={NavSettingsIcon} alt="NavSettingsIcon" />
			</button> */}
		</div>
	);
};

export default LeftNav;
