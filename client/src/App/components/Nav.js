import React from 'react';

import { NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

export default () => (
    <div className='Nav'>
       <NavLink to="/" exact>Home</NavLink>
       <NavLink to="/all" exact>View All Entries</NavLink>
       <NavLink to="/all" exact>Sign Out <FontAwesomeIcon icon={faSignOutAlt} /></NavLink>
        <NavLink to="/login" exact>Login</NavLink>
    </div>
);
