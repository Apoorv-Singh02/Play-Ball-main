import React, { useReducer, useState } from 'react';
import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from './firebase';
import App from './App';
import { useSelector, useDispatch } from 'react-redux'
import { login,logout } from './app/features';


function HomeScreen() {
  const userExist = useSelector((state) => state.user.userExists )

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch()

  const handleClick = () => {
    createUserWithEmailAndPassword(auth, email, password).then(response => {
      dispatch(login(response.user))
      console.log(userExist)
      console.log(response)
    }).catch(error => {
      console.log(error.message);
    })

    setEmail("")
    setPassword("")
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password).then(response => {
      console.log(response)
      dispatch(login(response.user))
      console.log(userExist)
    }).catch(error => {
      console.log(error.message);
    })
    setEmail("")
    setPassword("")
  };

  if (userExist) {
    return <App />;
  } else {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            value={email}
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            value={password}
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button type="submit">Sign In</button>
        </form>
        <button onClick={handleClick}>Sign Up</button>
      </div>
    );
  }
}

export default HomeScreen;