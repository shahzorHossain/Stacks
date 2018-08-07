import React from 'react';
import { Component } from 'react';
import Photo from './Photo';
import Comment from './Comment';
import { Link } from 'react-router';

class Single extends Component {
  render() {
    const index = this.props.posts.findIndex(
      post => post.code === this.props.params.postId
    );

    const post = this.props.posts[index];
    return (
      <div className="single-photo">
        <Photo index={index} post={post} {...this.props} />;<Comment />
      </div>
    );
  }
}

export default Single;
