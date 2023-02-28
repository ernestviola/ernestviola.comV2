import React, {useState,useEffect} from 'react'
import { Auth } from 'aws-amplify';

import { Navigate } from 'react-router-dom';

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

const Login = () => {
    const [isAuthenticating, setIsAuthenticating] = useState(true);
    const [isAuthenticated, userHasAuthenticated] = useState(false);

    useEffect(() => {
        onLoad();
      }, []);
      
    async function onLoad() {
    try {
        await Auth.currentSession();
        userHasAuthenticated(true);
    } catch (e) {
        if (e !== "No current user") {
        alert(e);
        }
    }
    
    setIsAuthenticating(false);
    }

  return (
    !isAuthenticating && (
    <div>
        {
            isAuthenticated ? (<><Navigate to='/' /></>) :
            (<></>)

        }
    </div>)
  )
}

export default withAuthenticator(Login)