import "../stylesheets/codeWindow.css";

const CodeWindowContentHeader = (props) => {
	const titleCase = (text) => {
		return text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
	};

	return (
		<>
			<p>
				<span className="codeKeyword">class </span>
				<span className="codeClass">{`${titleCase(props.subredditName)}`}</span>
				<span className="codeOperator">{" {"}</span>
			</p>

			<p>
				&emsp; &emsp;
				<span className="codeKeywordLite">{"constructor"}</span>
				<span className="codeOperator">{"("}</span>
				<span className="codeInputs">{"sort"}</span>
				<span className="codeOperator">{","}</span>
				<span className="codeInputs">{"time_range"}</span>
				<span className="codeOperator">{")"}</span>
				<span className="codeOperator">{" {"}</span>
			</p>

			<p>
				&emsp; &emsp; &emsp; &emsp;
				<span className="codeKeywordLite">{"this"}</span>
				<span className="codeOperator">{"."}</span>
				<span className="codeMethodCall">{"sort"}</span>
				<span className="codeOperator">{" = "}</span>
				<span className="codeString">{`"${props.subredditSort}"`}</span>
				<span className="codeOperator">{";"}</span>
			</p>
			<p>
				&emsp; &emsp; &emsp; &emsp;
				<span className="codeKeywordLite">{"this"}</span>
				<span className="codeOperator">{"."}</span>
				<span className="codeMethodCall">{"timeRange"}</span>
				<span className="codeOperator">{" = "}</span>
				<span className="codeString">{`"${props.subredditSortTimeRange}"`}</span>
				<span className="codeOperator">{";"}</span>
			</p>

			<p>
				&emsp; &emsp;
				<span className="codeOperator">{"}"}</span>
			</p>
			<br/>
			
		</>
	);
};

export default CodeWindowContentHeader;
