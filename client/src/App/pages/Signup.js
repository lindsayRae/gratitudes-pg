import React, { useState, useContext, useEffect } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { UserContext } from '../context/UserContext';

import './Login/Login.css';

export default ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const { user, setUser } = useContext(UserContext);
  console.log('user: ', user);

  useEffect(() => {
    console.log('in use effect');
    console.log(user);
    if (user) {
      history.push('/');
    }
  }, [user]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();
      // const data = {
      //   jwt: 'sdfsdfsdf',
      //   user: {
      //     username: 'Lindsay',
      //     password: '1234',
      //     email: 'lbarnett712@gmail.com',
      //   },
      // };

      console.log('data: ', data);

      if (data.message) {
        setError(data.message[0].message);
        return;
      }

      setUser(data);
    } catch (err) {
      setError('Something went wrong', err);
    }
  };
  return (
    <div>

        <Container className='pt-5'>
        <Row className='justify-content-center'>
            <div className='col-lg-5'>
              <div className='pt-5 shadow border-0 card'>
                <div className='bg-white pb-5 text-center card-header'>
                  <h4>Create Account</h4>
                </div>
            </div>
                <div className='bg-white card-body px-lg-5 py-lg-5'>
            <div className='formContainer'>
            <form className='loginForm' onSubmit={handleSubmit}>
            <input
                type="email"
                value={email}
                placeholder="email"
                className='formControl'
                onChange={(event) => {
                  setError('');
                  setEmail(event.target.value);
                }}
            />
            <input
                type="password"
                value={password}
                placeholder="password"
                className='formControl'
                onChange={(event) => {
                  setError('');
                  setPassword(event.target.value);
                }}
            />
             <div className='text-center'>
                <Button type='submit'>Signup</Button>
            </div>
        </form>
        </div>
        {error && <p>{error}</p>}

            </div>

            </div>

        </Row>
      </Container>

    </div>
  );
};
