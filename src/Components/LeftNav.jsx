import "./styling.css";
import NavFilesIcon from "../images/vscode-default-icons/files.svg";
import NavSearchIcon from "../images/vscode-default-icons/search.svg";
import NavSourceControlIcon from "../images/vscode-default-icons/source-control.svg";
import NavDebugAltIcon from "../images/vscode-default-icons/debug-alt.svg";
import NavRemoteExplorerIcon from "../images/vscode-default-icons/remote-explorer.svg";
import NavExtensionsIcon from "../images/vscode-default-icons/extensions.svg";
import NavAccountIcon from "../images/vscode-default-icons/account.svg";
import NavSettingsIcon from "../images/vscode-default-icons/settings-gear.svg";

const LeftNav = () => {
	return (
		<div className="leftNav">
            {/* <div className="leftNavTopIcons">
            </div>
            <div className="leftNavBottomIcons">
            </div> */}
			<img className="leftNavIcon" src={NavFilesIcon} alt="NavFilesIcon" />
			<img className="leftNavIcon" src={NavSearchIcon} alt="NavSearchIcon" />
			<img className="leftNavIcon" src={NavSourceControlIcon} alt="NavSourceControlIcon" />
			<img className="leftNavIcon" src={NavDebugAltIcon} alt="NavDebugAltIcon" />
			<img className="leftNavIcon" src={NavRemoteExplorerIcon} alt="NavRemoteExplorerIcon" />
			<img className="leftNavIcon" src={NavExtensionsIcon} alt="NavExtensionsIcon" />
            <div className="flexSeperator"/>
			<img className="leftNavIcon" src={NavAccountIcon} alt="NavAccountIcon" />
			<img className="leftNavIcon" src={NavSettingsIcon} alt="NavSettingsIcon" />
		</div>
	);
};

export default LeftNav;
