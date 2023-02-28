import React, { useEffect, useState } from 'react'
import { Auth } from 'aws-amplify';

const Logout = () => {
    const [authStatus,setAuthStatus] = useState('page loaded');
    
    async function SignOut() {
        try {
            const response = await Auth.signOut();
            setAuthStatus(JSON.stringify(response))
            console.log(response)

        } catch (error) {
            // console.log('error signing out: ', error);
            setAuthStatus(JSON.stringify(error))
        }
    }

    useEffect( () => {
        SignOut()
    },[])
  return (
    <div>
        {authStatus}
    </div>
  )
}

export default Logout