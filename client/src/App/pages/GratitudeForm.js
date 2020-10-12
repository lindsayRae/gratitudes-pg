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
          <div className='form-group'>
          {props.edit ? (
            <>
            <div className='input-group-alternative mb-3'>
              <input
                  type='text'
                  placeholder='Update your item'
                  value={input}
                  name='text'
                  className='form-control edit'
                  onChange={handleChange}
                  ref={inputRef}
              />
              </div>
            <div className='text-center'>
              <button className="mt-4 btn btn-primary btn-block">Update</button>
            </div>
            </>
          ) : (
              <>
                <div className='input-group-alternative mb-3'>
                  <input
                    type='text'
                    placeholder='Add what you are thankful for here ...'
                    value={input}
                    name='text'
                    className='form-control'
                    onChange={handleChange}
                    ref={inputRef}
                  />
                </div>
                <div className='text-center'>
                  <button className="mt-4 btn btn-primary btn-block">Add</button>
                </div>
              </>
          )}

          </div>

        </form>
  );
}

export default GratitudeForm;
