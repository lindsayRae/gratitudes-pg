import React, { useState, useEffect } from 'react';
import './DailyQuote.css';

const usePosts = () => {
  const [quoteRes, setQuote] = useState([]);

  useEffect(() => {
    const proxyurl = 'https://cors-anywhere.herokuapp.com/';
    const quoteURL = 'https://zenquotes.io/api/today';
    const fetchQuote = async () => {
      const res = await fetch(proxyurl + quoteURL);
      const data = await res.json();
      setQuote(data);
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
        <div>"{quote[0].q}"</div>
        <hr></hr>
        <div>- {quote[0].a}</div>
      </>
   }
  </div>
  );
};
