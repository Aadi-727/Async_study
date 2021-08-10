const posts = [
	{
		title: "Post One",
		body: "This is post one ",
	},
	{
		title: "Post Two",
		body: "This is post two ",
	},
];

function getPosts() {
	setTimeout(() => {
		let output = "";
		posts.forEach((post) => {
			output += `<li>Title: ${post.title}</li>`;
			// console.log(post);
		});
		document.body.innerHTML = output;
	}, 1000);
}

function createPost(post, callback) {
	setTimeout(() => {
		posts.push(post);
		callback();
	}, 2000);
}
// getPosts();
createPost({ title: "Post Three", body: "This is post three" }, getPosts);
// Not visible because the createPost took longer that getPosts();
