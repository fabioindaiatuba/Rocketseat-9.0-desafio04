import React from 'react';
import PropTypes from 'prop-types';

function Comment({ data }) {

  return (
    <div className="comment">
      <img src={data.author.avatar} className="avatar" alt="avatar"/>
      <p>
        <strong>{data.author.name} </strong>{data.content} 
      </p>
    </div>
  );
}

Comment.propTypes = {
  data: PropTypes.shape({
    author: PropTypes.shape({
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
    }).isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired
}

export default Comment;