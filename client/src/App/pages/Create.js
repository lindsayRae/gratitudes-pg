import React, { useState } from 'react';

export default () => {
  const [dailyGratitude, setGratitude] = useState('');
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('heard handle submit');
    const response = await fetch('http://localhost:5000/api/gratitudes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        dailyGratitude,
      }),
    });

    const data = await response.json();
    console.log(data);
  };
  return (
        <div className="Create">
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
