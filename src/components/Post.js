import React, { Component } from 'react';

import Comment from './Comment';

class Post extends Component {
  render() {
    return (
      <div className="post">
        <div className="post-header">
          <img src="https://avatars1.githubusercontent.com/u/12553186?s=400&u=bf0c0f8a30c04ce524153f9cb15e0ad2c324cd66&v=4" className="avatar" alt="avatar"/>
          <div className="post-title">
            <strong>Usuario</strong>
            <small>02 Jan 2020</small>
          </div>
        </div>
        <p className="post-description">
          Pessoal, alguém sabe se a Rocketseat está contratando?
        </p>
        <Comment />
        <Comment />
      </div>
    )
  }
}

export default Post;