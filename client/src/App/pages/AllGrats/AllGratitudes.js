import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PostedGrats from '../PostedGrats/PostedGrats';

import './AllGrats.css';
// follow this pattern
const usePosts = () => {
  const [posts, setPosts] = useState([]);

  // passing the [] says only run once -> the the compnenet mounts
  // use effect is called when component mounts
  useEffect(() => {
    console.log('use effect was called');
    const getGrats = async () => {
      const res = await fetch('http://localhost:5000/api/gratitudes');
      const data = await res.json();
      console.log(data);
      setPosts(data);
    };
    getGrats();
  }, []);
  return posts;
};

const formatDate = (dateStr) => new Date(dateStr).toLocaleDateString(
  'en-gb',
  {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'utc',
  },
);

export default () => {
  const posts = usePosts();
  console.log('posts', posts);
  return (
    <div className='container'>
    <div className='main-card'>
      <div className='hero-image'>
        <div className='hero-text'>
          <div>My</div>
          <div>Gratitudes</div>
        </div>
      </div>
      <div className='main-body'>
        {
            posts.map((post) => (
              <Link to={`/${post.id}`} key={post.id}>
                <PostedGrats
                  date={formatDate(post.date)}
                  dailyGratitude={post.dailyGratitude}
                />
              </Link>
            ))
          }
        </div>
    </div>
    </div>
  );
};
