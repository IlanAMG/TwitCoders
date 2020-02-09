import React, { useContext } from 'react'
import { FaFacebook } from 'react-icons/fa'
import { FirebaseContext } from '../firebase';

export const Header = () => {
    const { user, firebase } = useContext(FirebaseContext)
    return (
        <div className='header'>
            <h1 className="header-title">TwitCoders</h1>
            {user ? 
            (<button 
                onClick={() => firebase.logout()} 
                type='button' 
                className='login-btn'> Logout
            </button>) 
            :
            (<button 
                onClick={() => firebase.login('facebook')} 
                type='button' 
                className='login-btn'> <FaFacebook /> Login
            </button>)}
        </div>
    )
}

