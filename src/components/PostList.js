import React, { Component } from 'react';

import Post from './Post';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Julio Alcantara",
          avatar: "https://avatars1.githubusercontent.com/u/12553186?s=400&u=bf0c0f8a30c04ce524153f9cb15e0ad2c324cd66&v=4"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "https://avatars1.githubusercontent.com/u/2254731?s=400&v=4"
            },
            content: "A rocketseat esta sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp.inclusive 80% do nosso time de devs é composto por alunos Bootcamp"
          }
        ]
      }
    ]
  };

  render() {
    return (
      <div className="list">
        <Post />
        <Post />
        <Post />
      </div>
    )
  }
}

export default PostList;