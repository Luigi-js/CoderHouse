import React from 'react';
import { Link } from 'react-router-dom';

export const DashboardActions = () => {
  return (
    <div className='dash-buttons'>
      <Link
        to='/edit-profile'
        className='btn btn-light rounded-style background-green white-color'
      >
        Edit Profile
      </Link>
      <Link
        to='/add-experience'
        className='btn btn-light rounded-style background-green white-color'
      >
        Add Experience
      </Link>
      <Link
        to='/add-education'
        className='btn btn-light rounded-style background-green white-color'
      >
        Add Education
      </Link>
    </div>
  );
};

export default DashboardActions;
