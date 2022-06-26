const retrieveInfo = async (userId) => {
	let url = 'https://jsonplaceholder.typicode.com/posts';
	let data = [];

	posts = await fetch(url).then(data => data.json());
	const incidents = posts.filter(post => post.userId === userId);
	incidents.forEach(incident => console.log(incident.title));
};
var id = 3;
retrieveInfo(id);// possible improvement, use arra of ids
console.log(id, ' was the id requested')