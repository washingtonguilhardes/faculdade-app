import React from 'react';
import Login from './src/Screens/Login';
import LoginHandler from './src/Screens/Login/LoginHandler';

export default function App() {
    return (
        <LoginHandler>
            <Login />
        </LoginHandler>
    );
}
