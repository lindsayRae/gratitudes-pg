import React, { useState, useEffect } from 'react';

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
    <div>
      <h1>single post page</h1>
      {loading
        && <p>Loading ...</p>
      }
      {!loading
      && <>
        {post[0].id
          && <>
            <p>{post[0].dailyGratitude}</p>
            <button onClick={handleDelete}> Delete this Post</button>
            <button onClick={() => setEdit(true)}> Edit this Post</button>
            {edit
              && <form onSubmit={handleEditSubmit}>
                <input
                  value={dailyGratitude}
                  onChange={(event) => setDailyGratitude(event.target.value)}
                  placeholder="New Gratitude"
                  />
                  <button>Confirm</button>
              </form>
            }
          </>
        }
         {!post[0].id
            && <p>404- not found</p>
         }
      </>
      }

    </div>
  );
};
