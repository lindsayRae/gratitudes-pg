import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from '../context/UserContext';

export default ({history}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const { user, setUser } = useContext(UserContext);
  console.log('user: ', user);

  useEffect(() => {
    if (user) {
      history.push('/');
    }
  }, [user]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // const response = await fetch('http://localhost:3000/auth/login', {
    //   method: 'POST',
    //   headers: {
    //     'Content-type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     email,
    //     password,
    //   }),
    // });

      // const data = await response.json();
      const data = {
        jwt: 'sdfsdfsdf',
        user: {
          username: 'Lindsay',
          email: 'lbarnett712@gmail.com',
        },
      };

      // sample an error 400
      //   data = {
      //     message: [
      //       { message: 'Please provide your password' },
      //     ],
      //   };
      console.log('data: ', data);

      if (data.message) {
        setError(data.message[0].message);
        return;
      }

      setUser(data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
        <h2>Login</h2>

        <form onSubmit={handleSubmit}>
            <input
                type="email"
                value={email}
                onChange={(event) => {
                  setError('');
                  setEmail(event.target.value);
                }}
            />
            <input
                type="password"
                value={password}
                onChange={(event) => {
                  setError('');
                  setPassword(event.target.value);
                }}
            />
            <button>Login</button>
        </form>

        {error && <p>{error}</p>}
    </div>
  );
};
