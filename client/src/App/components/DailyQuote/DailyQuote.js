import React, { useState, useEffect } from 'react';
import './DailyQuote.css';
import { getQuote } from '../../api';

// custom hook ** use this pattern
const usePosts = () => {
  const [quoteRes, setQuote] = useState([]);

  useEffect(() => {
    const fetchQuote = async () => {
      const newQuote = await getQuote();
      setQuote(newQuote);
    };
    fetchQuote();
  }, []);
  return quoteRes;
};

export default () => {
  const quote = usePosts();
  return (
    <div className='quoteContainer'>
   {quote[0]
      && <>
        <div>{quote[0].q}</div>
        <hr></hr>
        <div>- {quote[0].a}</div>
      </>
   }
  </div>
  );
};
