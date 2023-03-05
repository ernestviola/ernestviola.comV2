import React, { useState } from 'react'

import './Contact.css'

const Contact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const sendEmail = async (e) => {
        e.preventDefault()

        const response = await fetch('https://f7am2j1dof.execute-api.us-east-1.amazonaws.com/production', {
            method: 'POST',
            mode: 'cors',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json;charset=UTF-8",
              },

            body: JSON.stringify(
                {"body":{"name":name,"email":email,"message":message}}
            

            )
        })
        console.log(response)
    }


    return (
        <form className='formGroup'>
            <h1>Send a message!</h1>
            <div className='inputSection'>
                <div className='inputSection1'>
                    <input placeholder='Name' type='text' name='name' value={name} onChange={(e) => { setName(e.target.value) }} />
                    <input placeholder='Email Address' type='text' name='email' value={email} onChange={(e) => { setEmail(e.target.value) }} />
                </div>
                <div className='inputSection2'>
                    <textarea placeholder='Hi Ernest!' name='message' value={message} onChange={(e) => { setMessage(e.target.value) }}></textarea>
                </div>
            </div>
            <div className='submitSection'>
                <button className='submit' type='submit' onClick={sendEmail}>Send</button>
            </div>

        </form>
    )
}

export default Contact