import React, { useState } from 'react'

import './Contact.css'

const Contact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')


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
                <input className='submit' type='submit' value='Send' />
            </div>

        </form>
    )
}

export default Contact