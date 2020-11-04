import React, { useState, useContext } from 'react';
import { UserContext } from '../context/UserContext';

export default () => {
  const [dailyGratitude, setGratitude] = useState('');
  const [date, setDate] = useState('');
  const [error, setError] = useState('');
  const { user } = useContext(UserContext);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!user) {
      setError('Please login ');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/gratitudes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user.jwt}`,
        },
        body: JSON.stringify({
          dailyGratitude,
          date: new Date().toISOString(),
        }),
      });

      const data = await response.json();
      console.log('POST data', data);
    } catch (err) {
      console.log('Exception ', err);
      setError(err);
    }
  };
  return (
        <div className="Create">
        {error && <p>{error}</p>}

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="form-control"
                    placeholder="I am grateful for ..."
                    name="graefulEntry"
                    onChange={(event) => setGratitude(event.target.value)}
                />
                <div className='text-center'>
                    <button className='my-4 btn btn-primary'>
                        Send entry
                    </button>
                </div>
            </form>
        </div>
  );
};
