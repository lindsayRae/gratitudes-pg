import React from 'react';

export default () => {
  function greeting() {
    const today = new Date();
    const curHr = today.getHours();

    if (curHr < 12) return 'Good Morning,';
    if (curHr < 18) return 'Good Afternoon,';
    return 'Good Evening,';
  }
  return (
       <h4>{greeting()}</h4>
  );
};
