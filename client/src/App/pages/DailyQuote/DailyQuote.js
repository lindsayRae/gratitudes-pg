import React, { useState, useEffect } from 'react';
import './DailyQuote.css';

const mockQuote = [
  {
    q: 'Even though you are on the right track - you will get run over if you just sit there.',
    a: 'Will Rogers',
    h: '<blockquote>&ldquo;Even though you are on the right track - you will get run over if you just sit there.&rdquo; &mdash; <footer>Will Rogers</footer></blockquote>',
  },
];

export default () => {
  const [quote, setQuote] = useState([]);

  useEffect(() => {
    const getQuote = async () => {
      // const res = await fetch('https://zenquotes.io/api/random');
      // const data = await res.json();
      console.log(mockQuote);
      setQuote(mockQuote);
    };
    getQuote();
  }, []);

  return (
    <div className='quoteContainer'>
    <div>{mockQuote[0].q}</div>
    <hr></hr>
    <div>{mockQuote[0].a}</div>

  </div>
  );
};
