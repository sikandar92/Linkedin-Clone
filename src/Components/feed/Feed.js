import React, { useEffect, useState } from 'react';
import CreateIcon from '@material-ui/icons/Create';
import './Feed.css';
import InputOption from '../inputoption/InputOption';
import ImageIcon from '@material-ui/icons/Image';
import { CalendarViewDay, EventNote, Subscriptions } from '@material-ui/icons';
import Post from '../post/Post';
import { db } from '../../firebase';
import firebase from 'firebase';
import { selectUser } from '../../features/userSlice';
import { useSelector } from 'react-redux';
import FlipMove from 'react-flip-move';

function Feed() {
  const user = useSelector(selectUser);
  const [input, setInput] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection('posts')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  const sendPost = (e) => {
    e.preventDefault();
    console.log(user, input);
    db.collection('posts').add({
      name: user.displayName ? user.displayName : '',
      description: user.email,
      message: input,
      photoUrl: user.photoUrl ? user.photoUrl : '',
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput('');
  };

  return (
    <div className='feed'>
      <div className='feed__inputContainer'>
        <div className='feed__input'>
          <CreateIcon />
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type='text'
            />
            <button onClick={sendPost} type='submit'>
              Send
            </button>
          </form>
        </div>
        <div className='feed__inputOption'>
          <InputOption Icon={ImageIcon} title='photo' color='#70B5F9' />
          <InputOption Icon={Subscriptions} title='Video' color='#70B5F9' />
          <InputOption Icon={EventNote} title='Event' color='#70B5F9' />
          <InputOption
            Icon={CalendarViewDay}
            title='Write article'
            color='#70B5F9'
          />
        </div>
      </div>
      <FlipMove>
        {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
