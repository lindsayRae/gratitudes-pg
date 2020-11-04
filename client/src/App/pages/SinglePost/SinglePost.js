import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';

import './SinglePost.css';

export default ({ match, history }) => {
  const { id } = match.params;
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);
  const [edit, setEdit] = useState(false);

  // Used for edit form
  const [dailyGratitude, setDailyGratitude] = useState('');

  const fetchPost = async () => {
    const response = await fetch(`http://localhost:5000/api/gratitudes/${id}`);
    const data = await response.json();

    console.log('data', data);
    setPost(data);
    setDailyGratitude(data.dailyGratitude);
    setLoading(false);
    console.log(post);
  };

  const handleDelete = async () => {
    const response = await fetch(`http://localhost:5000/api/gratitudes/${id}`, {
      method: 'DELETE',
    });
    const data = await response.json();
    console.log(data);
    history.push('/all');
  };

  const handleEditSubmit = async (event) => {
    event.preventDefault();
    console.log('handleEditSubmit');

    const response = await fetch(`http://localhost:5000/api/gratitudes/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        dailyGratitude,
      }),
    });
    const data = await response.json();
    fetchPost();
    console.log('handleEditSubmit', data);
  };

  useEffect(() => {
    fetchPost();
  }, []);

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
          <div className='post-row'>
            {loading
              && <div>Loading ...</div>
            }
            {!loading
            && <>
              {post[0].id
                && <>
                  <div>
                    <div>
                      {post[0].dailyGratitude}
                    </div>
                    <div>{post[0].date}</div>
                  </div>

                  </>
              }
              {!post[0].id
                  && <div>404- not found</div>
              }
            </>
            }
          </div>
              <div className='post-row d-flex justify-content-center'>
                <Button variant="warning" onClick={handleDelete}> Delete this Post</Button>
                <Button variant="info" onClick={() => setEdit(true)}> Edit this Post</Button>
              </div>
              <div className='post-row edit-row'>
              {edit
                && <form onSubmit={handleEditSubmit}>
                  <input
                  className='formControl'
                    value={dailyGratitude}
                    onChange={(event) => setDailyGratitude(event.target.value)}
                    placeholder="New Gratitude"
                    />
                    <Button variant="info">Confirm</Button>
                </form>
              }
              </div>

          </div>
      </div>
    </div>

  );
};
