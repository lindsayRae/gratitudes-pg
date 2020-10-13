import React, { useState, useEffect } from 'react';
import PostedGrats from './PostedGrats/PostedGrats';

const mockPosts = [
  {
    id: '654',
    date: '10/11/2020',
    dailyGratitude: 'this is the first post',
  },
  {
    id: '650',
    date: '10/12/2020',
    dailyGratitude: 'this is the second post',
  },
];


export default () => (
    
  const [posts, setPosts] = useState([]);

  // passing the [] says only run once -> the the compnenet mounts
  useEffect(() => {
    const getGrats = async () => {
      const res = await fetch('http://localhost:1234/api/gratitudes');
      const data = await res.json();
      console.log(data)
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
);
