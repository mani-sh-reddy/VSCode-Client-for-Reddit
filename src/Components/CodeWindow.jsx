import "../stylesheets/codeWindow.css";
import Axios from "axios";
import React, { useState, useEffect } from "react";
import Moment from "react-moment";

const CodeWindow = () => {
	const [posts, setPosts] = useState([]);
	const [error, setError] = useState("");

	const postsLimiter = 20;

	const getPopularPosts = () => {
		Axios.get(`https://www.reddit.com/r/popular/hot.json?limit=${postsLimiter}`)
			.then((response) => {
				const allPosts = response.data.data.children;
				setPosts(allPosts);
				// allPosts.forEach((object) => {
				// 	console.log(object.data.title);
				// });
				console.log(response.data.data.children);
			})
			.catch((error) => {
				setError(error.message);
				console.error(error);
			});
	};

	useEffect(() => {
		getPopularPosts();
	}, []);

	const unixTimeConv = (unixTime) => {
		return (
			<Moment unix format="h:mm a, Do MMMM YYYY">
				{unixTime}
			</Moment>
		);
	};

	return (
		<>
			<div className="codeWindow">
				<div className="codeWindowContent">
					{posts.map((posts) => {
						return (
							<div key={posts.data.id}>
								<p>{`${posts.data.subreddit}`}</p>
								<p>{`by ${posts.data.author}`}</p>
								<p>created at {unixTimeConv(posts.data.created)}</p>
								<p>{`${posts.data.title}`}</p>
								<p>{`comments: ${posts.data.num_comments}`}</p>
								<p>{`score: ${posts.data.score}`}</p>
								<br />
							</div>
						);
					})}

					{error === "" ? null : <p>{error}</p>}
				</div>
			</div>
		</>
	);
};

export default CodeWindow;
