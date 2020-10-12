import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

import gratNavbar from './Header.css';

function HeaderRow() {
  //  const getCurrentDate = new Date().toLocaleDateString;

  return (
        <nav className="gratNavbar">
            <div>Sunday October 11th, 2020</div>
            <div>{Date.now()}</div>
            <FontAwesomeIcon icon={faSignOutAlt} />
        </nav>
  );
}

export default HeaderRow;
