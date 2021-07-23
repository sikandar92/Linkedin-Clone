import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import NotificationImportantIcon from '@material-ui/icons/NotificationImportant';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import MessageIcon from '@material-ui/icons/Message';
import './Header.css';
import HeaderOption from '../headerOption/HeaderOption';
import { auth } from '../../firebase';
import { logout, selectUser } from '../../features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
function Header() {
  const dispatch = useDispatch();
  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };
  return (
    <div className='header'>
      <div className='header__left'>
        <img
          src='https://image.flaticon.com/icons/png/512/174/174857.png'
          alt=''
        />
        <div className='header__search'>
          <SearchIcon />
          <input placeholder='search' type='text' />
        </div>
      </div>
      <div className='header__right'>
        <HeaderOption Icon={HomeIcon} title='Home' />
        <HeaderOption Icon={SupervisorAccountIcon} title='Network' />

        <HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
        <HeaderOption Icon={MessageIcon} title='Message' />
        <HeaderOption Icon={NotificationImportantIcon} title='Notification' />
        <HeaderOption avatar={true} title='Imran Khan' onClick={logoutOfApp} />
      </div>
    </div>
  );
}

export default Header;
//3 35 57
