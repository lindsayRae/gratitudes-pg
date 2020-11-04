import React, { useContext } from 'react';

import Greeting from '../components/Greeting';
import Create from './Create';
import DailyQuote from '../components/DailyQuote/DailyQuote';

import { UserContext } from '../context/UserContext';

export default () => {
  const { user, setUser } = useContext(UserContext);
  console.log(user);
  const today = Intl.DateTimeFormat(navigator.language, {
    weekday: 'long', month: 'short', day: 'numeric', year: 'numeric',
  }).format(new Date());

  return (

      <div className="pt-lg-7 container">
        <div className="row justify-content-center">
          <div className="col-lg-5">
            <div className="bg-secondary shadow border-0 card">
              <div className="bg-white pb-4 pt-4 card-header text-center">
              <p className='text-right'>{today}</p>
                <Greeting />
                <h5>What are you thankful for today?</h5>
              </div>
              <div className="px-lg-5 py-lg-5 card-body bg-white">
                <Create />
                <DailyQuote />
                </div>
              </div>
            </div>
          </div>
        </div>

  );
};
