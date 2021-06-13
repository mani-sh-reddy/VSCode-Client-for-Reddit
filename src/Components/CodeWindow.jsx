import "../stylesheets/codeWindow.css";
import Axios from "axios";
import React, { useState } from "react";

const CodeWindow = () => {
	const [posts, setPosts] = useState([]);

	const getPopularPosts = () => {
		Axios.get("https://www.reddit.com/r/popular/hot.json")
			.then((response) => {
				const allPosts = response.data.data.children;
				setPosts(allPosts);
				allPosts.forEach((object) => {
					console.log(object.data.title);
				});

				// console.log(response.data.data.children);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<>
			<div className="codeWindow">
				<div className="codeWindowContent">
					{posts.map((posts) => {
						return <p>{posts.data.title}</p>;
					})}

					<button onClick={getPopularPosts}>log the json</button>
				</div>
			</div>
		</>
	);
};

export default CodeWindow;
