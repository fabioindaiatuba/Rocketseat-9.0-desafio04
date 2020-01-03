import React, { Component } from 'react';

class Comment extends Component {

  render() {
    return (
      <div className="comment">
        <img src="https://avatars1.githubusercontent.com/u/12553186?s=400&u=bf0c0f8a30c04ce524153f9cb15e0ad2c324cd66&v=4" className="avatar" alt="avatar"/>
        <p>
          <strong>user name </strong>A rocketseat esta sempre em busca de novos membros para o time, 
          e geralmente ficamos de olho em quem se destaca no Bootcamp.inclusive 80% do nosso time de 
          devs é composto por alunos Bootcamp. 
        </p>
      </div>
    );
  }
}

export default Comment;