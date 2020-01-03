import React from 'react';

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

export default Post;