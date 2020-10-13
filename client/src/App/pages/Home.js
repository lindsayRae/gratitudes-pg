import React from 'react';

import Create from './Create';
import DailyQuote from './DailyQuote/DailyQuote';

export default () => (
    <div className="pt-lg-7 container">
      <div className="row justify-content-center">
        <div className="col-lg-5">
          <div className="bg-secondary shadow border-0 card">
            <div className="bg-white pb-4 pt-4 card-header text-center">
              <h4>Good Evening, Friend</h4>
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
