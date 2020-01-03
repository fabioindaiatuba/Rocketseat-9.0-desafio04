import React from 'react';

import './App.css';

import Header from './components/Header';
import PostList from './components/PostList';

function App() {
  return (
    <div className="content">
      <Header />
      <PostList />
    </div>
  )
}

export default App;