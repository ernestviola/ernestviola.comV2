import React, { useEffect, useState } from 'react'

import { API } from 'aws-amplify';

import { withAuthenticator, Button } from '@aws-amplify/ui-react';

import { useParams } from 'react-router-dom';

import CustomEditor from '../../customComponents/customEditor/CustomEditor';


import '@aws-amplify/ui-react/styles.css';
import '../../../styles/blog/Create.css'

const Update = ({ signOut, user }) => {
    const [contentState, setContentState] = useState('')
    const [loading, setLoading] = useState(true)
    const [title, setTitle] = useState('')
    let { uuid } = useParams()

    const onChange = (data) => {
        setContentState(data)
        console.log(contentState)
    }

    const handleSubmit = async () => {
        const contentText = JSON.stringify(contentState)
        const date = new Date().getTime()

        const resData = await API.put('blogsApi', '/blogs', {
            body: {
                uuid,
                title,
                content: contentText,
                updated_at: date
            }
        })

        console.log(resData)
    }


    const fetchBlog = async () => {

        const resData = await API.get('blogsApi', '/blogs/object/' + uuid)
        setContentState(JSON.parse(resData.content))
        console.log(resData)
        setTitle(resData.title)
        setLoading(false)
    }

    useEffect(() => {
        fetchBlog()
    }, []);


    return (
        (loading ? <>Loading...</> :
        <div className='page'>
            <h1>Update a blog</h1>
            <input value={title} onChange={(e) => setTitle(e.target.value)} />
            <CustomEditor onChange={onChange} contentState={contentState}/>
            <Button onClick={handleSubmit}>Submit</Button>
            <Button onClick={signOut}>Sign out</Button>
        </div>
        )

    )
}

export default withAuthenticator(Update)