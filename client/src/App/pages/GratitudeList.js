import React, { useState } from 'react';
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
        <div>
            <h1>What are you thankful for today?</h1>
            <GratitudeForm onSubmit={addGrat}/>
            <Gratitude grats={grats}
                completeGrat={completeGrat}
                removeGrat={removeGrat}
                updateGrat={updateGrat}/>
        </div>
  );
}

export default GratitudeList;
