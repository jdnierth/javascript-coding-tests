var api = require('./api');

showPostsForCurrentUser = (userId, cb) => {
  // In order to not have to write api.getPostsForUsers but just getPostsForUsers you would require the module
  // differently with:
  // var { getPostsForUser } = require('./api');
  api.getPostsForUser(userId, posts => {
    const postTemplates = posts.map(post => {
      return `
      <div class="post">
        ${post.title}
        ${post.body}
        ${post.createdBy}
      </div>`
    });
    cb(postTemplates)
  })
};

showUserProfile = (userId, cb) => {
  api.getUserById(userId, user => {
    const profile = `
      <div>
        ${user.name}
      </div>
    `;
    cb(user)
  })
};

module.exports = {
  showPostsForCurrentUser,
  showUserProfile
};