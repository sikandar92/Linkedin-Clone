import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Feed from './Components/feed/Feed';
import Header from './Components/header/Header';
import Login from './Components/login/Login';
import Sidebar from './Components/sidebar/Sidebar';
import Widgets from './Components/widgets/Widgets';
import { login, logout, selectUser } from './features/userSlice';
import { auth } from './firebase';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // user is logged in\
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        // user is logged out\
        dispatch(logout());
      }
    });
  }, []);

  return (
    <div className='app'>
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className='app__body'>
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
      )}
    </div>
  );
}

export default App;
