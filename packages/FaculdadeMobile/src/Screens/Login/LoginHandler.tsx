import React, { createContext, useCallback, useContext, useState } from 'react';

const LoginContext = createContext({
    name: '',
    email: '',
    handleChange(_field: 'name' | 'email', _value: string) { },
});

export default function LoginHandler(props: { children?: React.ReactNode }) {

    const { children } = props;

    const [user, setUser] = useState({ name: '', email: '' });
    const handleChange = useCallback((field: 'name' | 'email', value: string) => {
        setUser((prev) => ({ ...prev, [field]: value }));
    }, []);
    return (
        <LoginContext.Provider
            value={{ ...user, handleChange, }}
        >
            {children}
        </LoginContext.Provider>
    )
}

export function useLoginHandler() {
    return useContext(LoginContext);
}
