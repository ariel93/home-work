import React from 'react';
import Post from './Post';

const App = () => {
  const posts = [
    { title: 'First Post', info: 'Details about the first post' },
    { title: 'Second Post', info: 'Details about the second post' },
  ];

  return (
    <div className="app">
      {posts.map((post, index) => (
        <Post key={index} title={post.title} info={post.info} />
      ))}
    </div>
  );
};

export default App;
