import React, { useState } from 'react';
import DailyQuote from './DailyQuote/DailyQuote';
import Gratitude from './Gratitude';
import GratitudeForm from './GratitudeForm';

function GratitudeList() {
  const [grats, setGrats] = useState([]);

  const addGrat = (grat) => {
    if (!grat.text || /^\s*$/.test(grat.text)) {
      return;
    }

    const newGrats = [grat, ...grats];

    setGrats(newGrats);
  };

  const updateGrat = (gratId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    setGrats((prev) => prev.map((item) => (item.id === gratId ? newValue : item)));
  };
  const removeGrat = (id) => {
    const removeArr = [...grats].filter((grat) => grat.id !== id);

    setGrats(removeArr);
  };

  const completeGrat = (id) => {
    const updatedGrats = grats.map((grat) => {
      if (grat.id === id) {
        grat.isComplete = !grat.isComplete;
      }
      return grat;
    });

    setGrats(updatedGrats);
  };

  return (
        <div style={{ paddingTop: '6rem' }} className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-5'>
            <div className='shadow border-0 card'>
              <div className='bg-white pb-5 card-header'>
                  <div className='text-center mt-5'>
                    <h3>Good evening <span>Lindsay</span></h3>
                    <h5>What are you thankful for today?</h5>
                  </div>
              </div>

                <div className='px-lg-5 py-lg-5 card-body'>
                  <GratitudeForm onSubmit={addGrat}/>
                  <Gratitude grats={grats}
                      completeGrat={completeGrat}
                      removeGrat={removeGrat}
                      updateGrat={updateGrat}/>
                  <DailyQuote />
                </div>
              </div>
            </div>
          </div>
        </div>
  );
}

export default GratitudeList;
