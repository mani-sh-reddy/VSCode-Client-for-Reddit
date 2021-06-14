import "../stylesheets/codeWindow.css";
import Moment from "react-moment";

const CodeWindowContentPosts = (props) => {
	const unixTimeConvTime = (unixTime) => {
		return (
			<Moment unix format="h:mm a">
				{unixTime}
			</Moment>
		);
	};

	const unixTimeConvDate = (unixTime) => {
		return (
			<Moment unix format="Do MMMM YYYY">
				{unixTime}
			</Moment>
		);
	};

	return (
		<>
			<div className="tab1 indentGuide">
				<p>
					<span className="codeFunction">{props.postID}</span>
					<span className="codeOperator">{"("}</span>
					<span className="codeInputs">{props.domain}</span>
					<span className="codeOperator">{") {"}</span>
				</p>

				<div className="tab1 indentGuide">
					<p>
						<span className="codeKeywordLite">{"let "}</span>
						<span className="codeInputs">{"subreddit"}</span>
						<span className="codeOperator">{" = {"}</span>
					</p>
					<div className="tab1 indentGuide">
						<p>
							<span className="codeMethodCall">{"name: "}</span>
							<span className="codeString">"{props.subreddit}"</span>
							<span className="codeOperator">{","}</span>
						</p>
						<p>
							<span className="codeMethodCall">{"subscribers: "}</span>
							<span className="codeNumber">{props.subreddit_subscribers}</span>
						</p>
					</div>
					<p>
						<span className="codeOperator">{"}"}</span>
					</p>
					<br />
					<p>
						<span className="codeKeywordLite">{"let "}</span>
						<span className="codeInputs">{"timePosted"}</span>
						<span className="codeOperator">{" = ["}</span>
						<span className="codeString">"{unixTimeConvTime(props.created)}"</span>
						<span className="codeOperator">{", "}</span>
						<span className="codeString">"{unixTimeConvDate(props.created)}"</span>
						<span className="codeOperator">{"];"}</span>
					</p>
					<p>
						<span className="codeKeywordLite">{"let "}</span>
						<span className="codeInputs">{"author"}</span>
						<span className="codeOperator">{" = "}</span>
						<span className="codeString">"{props.author}"</span>
						<span className="codeOperator">{";"}</span>
					</p>
					<br />
					<p>
						{/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
						<span className="codeComment">// {props.title}</span>
					</p>
					<br />
					<p>
						<span className="codeKeywordLite">{"let "}</span>
						<span className="codeOperator">{"["}</span>
						<span className="codeInputs">{"upvotes"}</span>
						<span className="codeOperator">{","}</span>
						<span className="codeInputs">{" comments"}</span>
						<span className="codeOperator">{"] = ["}</span>
						<span className="codeNumber">{props.score}</span>
						<span className="codeOperator">{", "}</span>
						<span className="codeNumber">{props.num_comments}</span>
						<span className="codeOperator">{"];"}</span>
					</p>
					<br />
					<p>
						<span className="codeReturn">{"return"}</span>
						<span className="codeOperator">{" ("}</span>
						<a contenteditable="false" href={`https://www.reddit.com/${props.permalink}`} rel="noreferrer" target="_blank" className="toRedditButton">
							<span contenteditable="false" className="codeFunctionButton">{"open"}</span>
						</a>
						<span className="codeOperator">{", "}</span>
						<span className="codeMethodCall">{"upvote"}</span>
						<span className="codeOperator">{", "}</span>
						<span className="codeMethodCall">{"downvote"}</span>
						<span className="codeOperator">{", "}</span>
						<span className="codeMethodCall">{"giveAward"}</span>
						<span className="codeOperator">{", "}</span>
						<span className="codeMethodCall">{"share"}</span>
						<span className="codeOperator">{", "}</span>
						<span className="codeMethodCall">{"save"}</span>
						<span className="codeOperator">{");"}</span>
					</p>
				</div>
				<p>
					<span className="codeOperator">{"}"}</span>
				</p>
			</div>
			<br />
		</>
	);
};

export default CodeWindowContentPosts;
