import React, { useContext } from 'react';

import { NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../context/UserContext';

export default () => {
  const { user } = useContext(UserContext);
console.log(user)
  return (
        <div className='Nav'>

          {user
          && <>
              <NavLink to="/home" exact>Home</NavLink>
              <NavLink to="/all" exact>View All Entries</NavLink>
              <NavLink to="/login" exact>Sign Out <FontAwesomeIcon icon={faSignOutAlt} /></NavLink>
          </>
          }
          {!user
            && <>
          <NavLink to="/" exact>Login</NavLink>
          <NavLink to="/signup" exact>Create new account</NavLink>

          </>
          }

        </div>
  );
};
