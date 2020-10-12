import React from 'react';
import quoteContainer from './DailyQuote.css';

const quoteData = {
  q: 'Even though you are on the right track - you will get run over if you just sit there.',
  a: 'Will Rogers',
  h: '<blockquote>&ldquo;Even though you are on the right track - you will get run over if you just sit there.&rdquo; &mdash; <footer>Will Rogers</footer></blockquote>',
};

export default () => {
  const quote = quoteData.q
  const author = quoteData.a

  console.log('quote: ', quote)
  return(
    <div className='quoteContainer'>
    <div>{quote}</div>
    <hr></hr>
    <div>{author}</div>
  </div>
  )
      
};
