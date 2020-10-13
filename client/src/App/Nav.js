import React from 'react';
import { NavLink } from 'react-router-dom';

export default () => (
    <div className='Nav'>
       <NavLink to="/" exact>Home</NavLink>
       <NavLink to="/all" exact>All Gratitudes</NavLink>
    </div>
);
