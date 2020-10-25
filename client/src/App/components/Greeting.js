import React from 'react';

export default () => {
  /**
   *
   */
  const getGreeting = () => {
    const today = new Date();
    return greeting(today);
  };

  /**
 * Written this way so we can unit test
 * @param {*} today
 */
  const greeting = (today) => {
    const curHr = today.getHours();

    if (curHr < 12) return 'Good Morning,';
    if (curHr < 18) return 'Good Afternoon,';
    return 'Good Evening,';
  };
  const greet = getGreeting();

  return (
       <h4>{greet}</h4>
  );
};
