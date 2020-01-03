import React from 'react';
import PropTypes from 'prop-types';

import Comment from './Comment';

function Post({ post }) {
  const { comments } = post;
  return (  
    <div className="post">
      <div className="post-header">
        <img src={post.author.avatar} className="avatar" alt="avatar"/>
        <div className="post-title">
          <strong>{post.author.name}</strong>
          <small>{post.date}</small>
        </div>
      </div>
      <p className="post-description">
        {post.content}
      </p>
      { comments.map(comment => <Comment key={comment.id} data={comment} />)}
    </div>
  )
}

Post.propTypes = {
  post: PropTypes.shape({
    author: PropTypes.shape({
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
    }).isRequired,
    date: PropTypes.string.isRequired,
    comments: PropTypes.arrayOf(PropTypes.shape({
      author: PropTypes.shape({
        name: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
      }).isRequired,
      content: PropTypes.string.isRequired,
    })),
  }).isRequired
}

export default Post;