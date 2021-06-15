import "../stylesheets/codeWindow.css";

const CodeWindowContentHeader = (props) => {
	const titleCase = (text) => {
		return text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
	};

	return (
		<>
			<div>
					<span className="codeKeyword">class </span>
					<span className="codeClass">{`${titleCase(props.subredditName)}`}</span>
					<span className="codeOperator">{" {"}</span>

				<div className="tab1 indentGuide">
						<span className="codeKeywordLite">{"constructor"}</span>
						<span className="codeOperator">{"("}</span>
						<span className="codeInputs">{"sort"}</span>
						<span className="codeOperator">{","}</span>
						<span className="codeInputs">{"time_range"}</span>
						<span className="codeOperator">{")"}</span>
						<span className="codeOperator">{" {"}</span>

					<div className="tab1 indentGuide">
							<span className="codeKeywordLite">{"this"}</span>
							<span className="codeOperator">{"."}</span>
							<span className="codeMethodCall">{"sort"}</span>
							<span className="codeOperator">{" = "}</span>
							<span className="codeString">{`"${props.subredditSort}"`}</span>
							<span className="codeOperator">{";"}</span>
							<br/>
							<span className="codeKeywordLite">{"this"}</span>
							<span className="codeOperator">{"."}</span>
							<span className="codeMethodCall">{"timeRange"}</span>
							<span className="codeOperator">{" = "}</span>
							<span className="codeString">{`"${props.subredditSortTimeRange}"`}</span>
							<span className="codeOperator">{";"}</span>
					</div>
						<span className="codeOperator">{"}"}</span>
					<br />
				</div>
			</div>
			<br />
		</>
	);
};

export default CodeWindowContentHeader;
