import "../stylesheets/codeWindow.css";
import Axios from "axios";
import React, { useState, useEffect } from "react";
import CodeWindowContentPosts from "./CodeWindowContentPosts";
import CodeWindowContentHeader from "./CodeWindowContentHeader";
import LoadingIndicator from "./LoadingIndicator";

const CodeWindow = () => {
	const [posts, setPosts] = useState([]);
	const [error, setError] = useState("");

	const [loaded, setLoaded] = useState(false);

	const postsLimiter = 20;
	const subredditName = "popular";
	const subredditSort = "hot";
	// eslint-disable-next-line
	const subredditSortTimeRange = "past 24 hours";

	const getPopularPosts = () => {
		Axios.get(`https://www.reddit.com/r/${subredditName}/${subredditSort}.json?limit=${postsLimiter}`)
			.then((response) => {
				const allPosts = response.data.data.children;
				setPosts(allPosts);
				// allPosts.forEach((object) => {
				// 	console.log(object.data.title);
				// });
				// console.log(response.data.data.children);
				setLoaded(true);
			})
			.catch((error) => {
				setError(error.message);
				console.error(error);
			});
	};

	useEffect(() => {
		getPopularPosts();
	}, []);

	return (
		<>
			<div className="codeWindow">
				<div className="codeWindowContent">
					<CodeWindowContentHeader
						subredditName={subredditName}
						subredditSort={subredditSort}
						subredditSortTimeRange={subredditSortTimeRange}
					/>

					{error === "" ? null : <p>{error}</p>}

					{posts.map((posts) => {
						return (
							<CodeWindowContentPosts
								key={posts.data.id}
								postID={posts.data.id}
								subreddit={posts.data.subreddit}
								subreddit_subscribers={posts.data.subreddit_subscribers}
								author={posts.data.author}
								created={posts.data.created}
								title={posts.data.title}
								num_comments={posts.data.num_comments}
								score={posts.data.score}
								permalink={posts.data.permalink}
								domain={posts.data.domain}
							/>
						);
					})}

					{loaded === false ? <LoadingIndicator/> : null}

					<p className="codeOperator">{"}"}</p>
				</div>
			</div>
		</>
	);
};

export default CodeWindow;
