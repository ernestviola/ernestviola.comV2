import React from 'react'
import {Auth} from 'aws-amplify';

const CheckUser = () => {
    async function callApi() {
      try {
        const user = await Auth.currentAuthenticatedUser()
        const token = user.signInUserSession.accessToken.jwtToken


        console.log(token)

        Auth.currentSession().then(data => console.log(data.accessToken));
      } catch (e) {
        console.log(e)
      }
        
    }

  return (
    <div>
        <button onClick={callApi}>Check User</button>
    </div>
  )
}

export default CheckUser