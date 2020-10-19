import React, { useState, useEffect } from 'react';
import PostedGrats from './PostedGrats/PostedGrats';

export default ({ match }) => {
  const { id } = match.params;
  console.log('id', id);

  const [post, setPost] = useState({});

  useEffect(() => {
    const fetchPost = async () => {
      const res = await fetch(`http://localhost:5000/api/gratitudes/${id}`);
      const data = await res.json();

      console.log('single data:', data);
      setPost(data);
    };
    fetchPost();
  }, []);

  return (
        <div>
        <PostedGrats
            key={post.id}
            date={post.date}
            dailyGratitude={post.dailyGratitude}
        />

    </div>
  );
};
