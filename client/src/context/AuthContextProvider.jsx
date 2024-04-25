import React, { createContext, useEffect, useState } from 'react'
import { getMe, signIn, signUp } from '../api/auth';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../utils/constants';

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null)

    const handleSignUp = async (payload) => {
        try {
            const { data } = await signUp(payload);
            navigate(PATHS.LOGIN)
        } catch (error) {
            alert(error.message.message)
        }
    }

    const handleLogin = async (payload) => {
        try {
            const { data } = await signIn(payload);
            setUser(data.userWithoutPassword)
            localStorage.setItem("token", data.token)
            window.location.reload();
        } catch (error) {
            alert(error.message)
        }
    }
    
    const handleLogout = () => {
        try {
            localStorage.removeItem("token")
            navigate(PATHS.LOGIN)
            window.location.reload();
        } catch (error) {
            alert(error.message)
        }
    }

    useEffect(() => {
        if(!localStorage.getItem("token")){
            setLoading(false)
            navigate(PATHS.LOGIN)
            return 
        }
        getMe().then(({data}) => {
            setUser(data.user)
            navigate(PATHS.HOME)
            setLoading(false)
        }).catch(err => {
            navigate(PATHS.LOGIN)
            setLoading(false)
            localStorage.removeItem("token")
            
        })
    },[])
    const values = {
        handleSignUp,
        handleLogin,
        handleLogout
    }

    if(loading){
        return (
            <p>Loading...</p>
        )
    }
    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider