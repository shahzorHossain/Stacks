// remove comment

export function removeComment(postId, index) {
  return {
    type: 'REMOVE_COMMENT',
    index: index,
    postId: postId,
  };
}
