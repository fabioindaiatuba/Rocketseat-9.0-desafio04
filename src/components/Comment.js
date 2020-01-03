import React from 'react';

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

export default Comment;