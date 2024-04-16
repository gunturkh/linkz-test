import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { NavLink, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = async (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, `${username}@test.com`, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        if (user) {
          fetch(`http://localhost:3001/user/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              username,
              password,
              latestLogin: user.metadata.lastSignInTime,
            }),
          })
            .then((userCredential) => {
              // Signed in
              console.log('logged in user', userCredential);
              // ...
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log(errorCode, errorMessage);
              // ..
            });
        }
        localStorage.setItem('accessToken', user?.accessToken);
        navigate('/');
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <>
      <main>
        <section>
          <div
            style={{
              padding: '20px 30px',
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              alignItems: 'center',
              borderRadius: 10,
              boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            }}
          >
            <h1> Linkz Test </h1>

            <form>
              <div
                style={{
                  display: 'flex',
                  gap: 20,
                  justifyContent: 'space-around',
                  width: '100%',
                  marginBottom: 10,
                }}
              >
                <label htmlFor="username">Username</label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  placeholder="Username"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div
                style={{
                  display: 'flex',
                  gap: 20,
                  justifyContent: 'space-around',
                  width: '100%',
                  marginBottom: 10,
                }}
              >
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button onClick={onLogin}>Login</button>
              </div>
            </form>

            <p className="text-sm text-white text-center">
              No account yet? <NavLink to="/signup" style={{textDecoration: 'none'}}>Sign up</NavLink>
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default Login;
