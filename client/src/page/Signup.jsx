import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();

    const result = await fetch('http://localhost:3001/user', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    const data = await result.json();
    if (result.status === 201) {
      navigate('/login');
    } else {
      alert(await data.message);
    }
  };

  return (
    <main>
      <section>
        <div>
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
                  type="text"
                  label="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  placeholder="Username"
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
                  type="password"
                  label="Create password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Password"
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button type="submit" onClick={onSubmit}>
                  Sign up
                </button>
              </div>
            </form>

            <p>
              Already have an account?{' '}
              <NavLink to="/login" style={{ textDecoration: 'none' }}>
                Sign in
              </NavLink>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Signup;
