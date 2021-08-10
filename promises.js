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

function createPost(post) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			posts.push(post);
			const error = false;
			if (!error) {
				resolve();
			} else {
				reject(
					(document.body.innerHTML =
						"Oops ..😵 ❌Error❌ Something Went Wrong!!!")
				);
			}
		}, 2000);
	});
}

/* 
  createPost({ title: "Post Three", body: "This is post three" })
	.then(getPosts)
	.catch((err) => console.log(err)); // .then(to get the actual posts)
 */

/* 😊😊 Async / Await --> Async nessessary befor fn(){} */

/* 
async function init() {
	await createPost({ title: "Post Three", body: "This is post three" });
	//  --> waiting for create post to complete before get posts
	getPosts();
}

init();
 */

/* Async Await with fetch() */

async function fetchUsers() {
	const res = await fetch("https://jsonplaceholder.typicode.com/users");

	const data = await res.json();

	console.log(data);
}

fetchUsers();
/* Promise.all */

// const promise1 = Promise.resolve("Hello World");
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) =>
// 	setTimeout(resolve, 2000, "Good Bye")
// );
// const promise4 = fetch("https://jsonplaceholder.typicode.com/users").then(
// 	(res) => res.json()
// ); // Fetch

// Promise.all([promise1, promise2, promise3, promise4]).then((values) =>
// 	console.log(values)
// );
