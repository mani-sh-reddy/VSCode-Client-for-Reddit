import "../stylesheets/explorerBar.css";

const ExplorerBar = () => {
	const chevron = () => {
		return <img className="leftNavIcon" src={require(`../images/chevron-right.svg`).default} alt="arrow right" />;
	};

	return (
		<div className="explorerBar">
			<p className="explorerBarHeading">EXPLORER</p>
			{chevron}
			<span className="explorerTopLevel">WORKSPACE (WORKSPACE)</span>
		</div>
	);
};

export default ExplorerBar;
