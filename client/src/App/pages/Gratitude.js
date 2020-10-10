import React, { useState } from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import GratForm from './GratitudeForm';

function Gratitude({
  grats, completeGrat, removeGrat, updateGrat,
}) {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
  });

  const submitUpdate = (value) => {
    updateGrat(edit.id, value);
    setEdit({
      id: null,
      value: '',
    });
  };

  if (edit.id) {
    return <GratForm edit={edit} onSubmit={submitUpdate} />;
  }

  return grats.map((grat, index) => (
      <div
        className={grat.isComplete ? 'grat-row complete' : 'grat-row'}
        key={index}
        >
            <div key={grat.id} onClick={() => completeGrat(grat.id)}>
                {grat.text}
            </div>
            <div className="icons">
                <RiCloseCircleLine onClick={() => removeGrat(grat.id)} className='delete-icon'/>
                <TiEdit onClick={() => setEdit({ id: grat.id, value: grat.text })} className='edit-icon'/>
            </div>
        </div>
  ));
}

export default Gratitude;
