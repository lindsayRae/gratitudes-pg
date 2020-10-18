import React, { useState, useEffect } from 'react';
import PostedGrats from './PostedGrats/PostedGrats';

export default () => {
  const [posts, setPosts] = useState([]);

  // passing the [] says only run once -> the the compnenet mounts
  useEffect(() => {
    const getGrats = async () => {
      const res = await fetch('http://localhost:5000/api/gratitudes/all');
      const data = await res.json();
      console.log(data);
      setPosts(data);
    };
    getGrats();
  }, []);

  return (
    <div className='container'>
      {
        posts.map((post) => (
          <PostedGrats
            key={post.id}
            date={post.date}
            dailyGratitude={post.dailyGratitude}
          />
        ))
      }
    </div>
  );
};
