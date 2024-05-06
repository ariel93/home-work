import React from 'react';

const Post = ({ title, info }) => {
  return (
    <div className="post">
      <h2>{title}</h2>
      <p>{info}</p>
    </div>
  );
};

export default Post;