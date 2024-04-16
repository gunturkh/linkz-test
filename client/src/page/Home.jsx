import React from 'react';
import { signOut } from "firebase/auth";
import { auth } from '../firebase';
import { Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const accessToken = localStorage?.getItem('accessToken')
    console.log('accessToken', accessToken)
    const navigate = useNavigate();

    if (!accessToken) {
        return <Navigate to="/login" replace />
    } else if (accessToken) {
        fetch(`http://localhost:3001/user/verify/${accessToken}`)
            .then(async response => {
                const userData = await response.json()
                console.log('userData', userData)
                // setData(userData)
                if (response.status !== 200) {
                    return <Navigate to="/login" replace />
                }
            })
    }

    const handleLogout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            localStorage.removeItem('accessToken')
            navigate("/login");
            console.log("Signed out successfully")
        }).catch((error) => {
            // An error happened.
        });
    }

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', height: '100vh' }}>
                <h1>
                    Welcome Home
                </h1>
                <div>
                    <button onClick={handleLogout}>
                        Logout
                    </button>
                </div>
            </div>
        </>
    )
}

export default Home;