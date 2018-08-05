// add comment

export function addComment(postId, author, comment) {
  return {
    type: 'ADD_COMMENT',
    author: author,
    comment: comment,
  };
}
