import React, { useState } from 'react';
import './Login.css';
import { login } from '../../features/userSlice';
import { auth } from '../../firebase';
import { useDispatch } from 'react-redux';

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();
  const [profilePic, setprofilePic] = useState();
  const dispatch = useDispatch();
  const loginToApp = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: name,
            photoUrl: profilePic,
          })
        );
      })
      .catch((error) => alert(error));
  };

  const register = () => {
    if (!name) {
      return alert('please enter full name!');
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoUrl: profilePic,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoUrl: profilePic,
              })
            );
          });
      })
      .catch((error) => alert(error));
  };

  return (
    <div className='login'>
      <img
        src='https://e7.pngegg.com/pngimages/774/981/png-clipart-linkedin-advertising-social-media-marketing-company-hairstyle-logo-company-text.png'
        alt=''
      />
      <form action=''>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Full name (required if registering) '
          type='text'
        />

        <input
          value={profilePic}
          onChange={(e) => setprofilePic(e.target.value)}
          placeholder='profile url(optional) '
          type='text'
        />

        <input
          event={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Email 
         '
          type='Email'
        />

        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='password '
          type='password'
        />

        <button type='submit' onClick={loginToApp}>
          Sign In
        </button>
      </form>

      <p>
        Not a member?{''}
        <span className='login__register' onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Login;
