
var getUserById = function() {
	// simulate API call
  window.setTimeout(() => {
    const user = window.App.users.find(user => user.id === id)
    cb(user)
  }, 150)
}

var getPostsForUser = function getPostsForUser(userId, cb) {
  // simulate API call
  window.setTimeout(() => {
    const posts = window.App.posts.filter(post => post.createdBy === userId)
    cb(posts)
  }, 150)
}
