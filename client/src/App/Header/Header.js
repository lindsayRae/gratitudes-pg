import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

import './Header.css';

function HeaderRow() {
  let [today, setDate] = useState([]);
  useEffect(() => {
    today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();

    today = `${mm}/${dd}/${yyyy}`;
    setDate(today);
  }, []);

  console.log(today);

  return (
        <nav className="gratNavbar">
            <div>{today}</div>
            <FontAwesomeIcon icon={faSignOutAlt} />
        </nav>
  );
}

export default HeaderRow;
