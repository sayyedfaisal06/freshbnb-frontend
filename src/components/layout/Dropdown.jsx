import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from 'providers/AuthProvider';

import {
  // PersonIcon,
  SettingsApplicationsIcon,
  ExitToAppIcon,
  BusinessIcon,
} from 'components/icons';

const Dropdown = () => {
  const authService = useAuth();

  return (
    <div className='dropdown'>
      <ul>
        {/* <li>
          <Link to='/profile'>
            <PersonIcon /> Profile
          </Link>
        </li> */}
        <li style={{ padding: '10px' }}>
          <Link to='/all/browse'>
            <BusinessIcon style={{ marginRight: '15px' }} />
            Browse
          </Link>
        </li>
        <li style={{ padding: '10px' }}>
          <Link to='/manage'>
            <SettingsApplicationsIcon style={{ marginRight: '15px' }} />
            Manage
          </Link>
        </li>
        <li style={{ padding: '10px' }}>
          <a href='/' onClick={() => authService.logout()}>
            <ExitToAppIcon style={{ marginRight: '15px' }} />
            Logout
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
