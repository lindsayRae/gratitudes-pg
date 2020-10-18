import React, { useContext } from 'react';

import { NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../context/UserContext';

export default () => {
  const { user } = useContext(UserContext);

  return (
        <div className='Nav'>
        <NavLink to="/" exact>Home</NavLink>
        {user
        && <>
            <NavLink to="/all" exact>View All Entries</NavLink>
            <NavLink to="/all" exact>Sign Out <FontAwesomeIcon icon={faSignOutAlt} /></NavLink>
        </>
        }
        {!user
            && <NavLink to="/login" exact>Login</NavLink>
        }

        </div>
  );
};
