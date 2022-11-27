const users = [
  {
    id: 1,
    name: "RynYaz",
  },
  {
    id: 2,
    name: "Dat",
  },
];
const comments = [
  {
    id: 1,
    user_id: 1,
    content: "Game ko",
  },
  {
    id: 2,
    user_id: 2,
    content: "Ko",
  },
  {
    id: 3,
    user_id: 1,
    content: "Cut M",
  },
];
getComments = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(comments);
    }, 1000);
  });
};
getComments()
  .then((comments) => {
    let usersIds = comments.map((comment) => {
      return comment.user_id;
    });
    return getUsersByIds(usersIds).then((users) => {
      return {
        users: users,
        comments: comments,
      };
    });
  })
  .then((data) => {
    let commentBlocks = document.querySelector("#comment-blocks");
    let html = "";
    data.comments.forEach((comment) => {
      let user = users.find((user) => {
        return user.id === comment.user_id;
      });
      html += `<li>${user.name}: ${comment.content}</li>`;
    });
    commentBlocks.innerHTML = html;
  });
getUsersByIds = (usersIds) => {
  return new Promise((resolve) => {
    var results = users.filter((user) => {
      return usersIds.includes(user.id);
    });
    setTimeout(() => {
      resolve(results);
    });
  });
};
