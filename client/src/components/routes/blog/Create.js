import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';

import { API } from 'aws-amplify';
import { v4 as uuidv4 } from 'uuid';

import { withAuthenticator, Button } from '@aws-amplify/ui-react';
import CustomEditor from '../../customComponents/customEditor/CustomEditor';


import '@aws-amplify/ui-react/styles.css';
import '../../../styles/blog/Create.css'

const Create = ({ signOut, user }) => {

  const [contentState, setContentState] = useState('')
  const [title, setTitle] = useState('')
  const [isSubmit, setIsSubmit] = useState(false)
  const [url, setUrl] = useState('')

  const onChange = (data) => {
    setContentState(data)
    console.log(contentState)
  }

  const handleSubmit = async (e) => {
    const contentText = JSON.stringify(contentState)
    const date = new Date().getTime()
    e.preventDefault()

    let uuid = uuidv4();
    setUrl('/blog/'+uuid)
    setIsSubmit(true)

    const res = await API.post('blogsApi', '/blogs', {
      body: {
        uuid,
        title,
        content: contentText,
        added_at: date,
        updated_at: date
      }
    })

    console.log(res)

  }



  return (
    (!isSubmit ? 
    <div className='page'>
      <h1>Create a blog</h1>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <CustomEditor onChange={onChange} />
      <Button onClick={handleSubmit}>Publish</Button>
      <Button onClick={signOut}>Sign out</Button>
    </div> : (<><Navigate to={url} /></>)
  ))
}

export default withAuthenticator(Create)