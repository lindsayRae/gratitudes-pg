import React, { useState, useEffect, useRef } from 'react';

function GratitudeForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });
  //  eslint-disable-next-line
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });

    setInput('');
  };

  return (
        <form className='grat-form' onSubmit={handleSubmit}>
        {props.edit ? (
            <>
            <input
                type='text'
                placeholder='Update your item'
                value={input}
                name='text'
                className='grat-input edit'
                onChange={handleChange}
                ref={inputRef}
            />
            <button className="grat-button edit">Update</button>
            </>
        ) : (
                <>
                <input
                type='text'
                placeholder='Add what you are thankful for here ...'
                value={input}
                name='text'
                className='grat-input'
                onChange={handleChange}
                ref={inputRef}
            />
            <button className="grat-button">Add</button>
            </>
        )}

        </form>
  );
}

export default GratitudeForm;
