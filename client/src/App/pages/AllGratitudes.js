import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PostedGrats from './PostedGrats/PostedGrats';

export default () => {
  const [posts, setPosts] = useState([]);

  // passing the [] says only run once -> the the compnenet mounts
  useEffect(() => {
    const getGrats = async () => {
      const res = await fetch('http://localhost:5000/api/gratitudes');
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
          <Link to={`/${post.id}`}>
            <PostedGrats
              key={post.id}
              date={post.date}
              dailyGratitude={post.dailyGratitude}
            />
          </Link>
        ))
      }
    </div>
  );
};
