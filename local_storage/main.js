var posts = [];

// form action
$('#draft button').click( function(event){

	// stop form from trying to send and refresh page 
	event.preventDefault();

	// create post from form

	var post = {};
	post.title = $('#title').val();
	post.content = $('#content').val();

	// add post to posts
	post.push(post);

	console.log('post: ', post);
	console.log('posts: ', posts);

	displayPost(post);
	storePosts(posts);


})

function displayPost(post) {

	var html = '...'
}

function storePosts(posts) {
	// make the array a string
	posts = JSON.stringify(posts);

	//localStorage is part of javascript and html5
	localStorage.posts = posts;

}

// load posts
function loadPosts(){

	//check for posts in storage
	if (localStorage.posts) {

		posts = localStorage.posts;

		// turn string into an array
		posts = JSON.parse(posts);

		// loop thru items in the array
		for (i=0; count=posts.length; i<count; i++){

			var post = posts[i]
			console.log( post );
			displayPosts(post);
		}
	} else { // nothing in storage?

		posts = [];
	}
}

loadPosts();

// advanced...

var facebootster = {
	load : function() {
		if (localStorage.posts){
			posts = localStorage.posts;
			posts = JSON.parse(posts);
			for (var i=0, count=posts.length; i<count; i++){
				var post = posts[i]
				displayPost(post);
			}
		}
	},

	...
}
