import "../stylesheets/explorerBar.css";

const ExplorerBar = () => {
	return (
		<>
			<div className="explorerBar">
				<p className="explorerBarHeading">EXPLORER</p>
				<span className="explorerLevelWorkspace">WORKSPACE (WORKSPACE)</span>
				<div className="explorerIndentLarge">
					<p  className="explorerLevel2">.github</p>
					<p  className="explorerLevel2">node_modules</p>
					<p  className="explorerLevel2">public</p>
					<p  className="explorerLevel2">src</p>

					<div className="explorerIndent indentGuide">
					<p  className="explorerLevel2">Components</p>
					<p  className="explorerLevel2">images</p>
					<p  className="explorerLevel2">stylesheets</p>
					<p  className="explorerLevel2">App.css</p>
					<p  className="explorerLevel2">App.js</p>
					<p  className="explorerLevel2">index.css</p>
					<p  className="explorerLevel2">reportWebVitals.js</p>
					<p  className="explorerLevel2">setupTests.js</p>
					</div>
					<p  className="explorerLevel2">.gitignore</p>
					<p  className="explorerLevel2">package-lock.json</p>
					<p  className="explorerLevel2">package.json</p>
					<p  className="explorerLevel2">README.md</p>
					<p  className="explorerLevel2">workspace.code-workspace</p>
				</div>
			</div>
		</>
	);
};

export default ExplorerBar;
