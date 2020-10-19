import React, { useState } from 'react';

export default () => {
  function greeting() {
    const { hours } = new Date();

    if (hours > 12 && hours < 17) {
      return 'Good Afternoon, Friend';
    } if (hours > 17) {
      return 'Good Evening, Friend';
    }
    return 'Good Morning, Frined';
  }
  return (

       <h4>{greeting()}</h4>
  );
};
